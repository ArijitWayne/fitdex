import { useCallback, useEffect, useRef, useState } from 'react'
import { useAudio } from '../audio/useAudio'

interface SpeechRecognitionEvent {
  resultIndex: number
  results: {
    length: number
    item(index: number): {
      isFinal: boolean
      item(index: number): {
        transcript: string
      }
    }
    [index: number]: {
      isFinal: boolean
      [index: number]: {
        transcript: string
      }
    }
  }
}

interface SpeechRecognitionErrorEvent {
  error: string
  message?: string
}

interface ISpeechRecognition {
  continuous: boolean
  interimResults: boolean
  lang: string
  start(): void
  stop(): void
  abort(): void
  onstart: (() => void) | null
  onend: (() => void) | null
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null
  onresult: ((event: SpeechRecognitionEvent) => void) | null
}

declare global {
  interface Window {
    SpeechRecognition?: new () => ISpeechRecognition
    webkitSpeechRecognition?: new () => ISpeechRecognition
  }
}

export function useSpeechRecognition() {
  const { playEffect } = useAudio()
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [interimTranscript, setInterimTranscript] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [supported, setSupported] = useState(false)
  const recognitionRef = useRef<ISpeechRecognition | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition
      setSupported(Boolean(SpeechRecognitionClass))
    }
  }, [])

  const startListening = useCallback(() => {
    setError(null)
    const SpeechRecognitionClass = typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null
    if (!SpeechRecognitionClass) {
      setError('Speech recognition is not supported in this environment.')
      return
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.abort()
      }

      const recognition = new SpeechRecognitionClass()
      recognition.continuous = true
      recognition.interimResults = true
      recognition.lang = 'en-US'

      recognition.onstart = () => {
        setIsListening(true)
        playEffect('select')
      }

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let finalStr = ''
        let interimStr = ''

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const res = event.results[i]
          if (res.isFinal) {
            finalStr += res[0].transcript + ' '
          } else {
            interimStr += res[0].transcript
          }
        }

        if (finalStr) {
          setTranscript((prev) => (prev ? `${prev.trim()} ${finalStr.trim()}` : finalStr.trim()))
        }
        setInterimTranscript(interimStr)
      }

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.warn('[SpeechRecognition] error:', event.error)
        if (event.error !== 'no-speech') {
          setError(`Speech error: ${event.error}`)
        }
      }

      recognition.onend = () => {
        setIsListening(false)
        setInterimTranscript('')
      }

      recognitionRef.current = recognition
      recognition.start()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not start voice recognition')
      setIsListening(false)
    }
  }, [playEffect])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      playEffect('select')
    }
    setIsListening(false)
    setInterimTranscript('')
  }, [playEffect])

  const resetTranscript = useCallback(() => {
    setTranscript('')
    setInterimTranscript('')
    setError(null)
  }, [])

  return {
    isListening,
    transcript,
    interimTranscript,
    error,
    supported,
    startListening,
    stopListening,
    resetTranscript,
    setTranscript,
  }
}
