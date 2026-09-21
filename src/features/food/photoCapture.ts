import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

export class PhotoCaptureCancelledError extends Error {
  constructor() {
    super('Photo capture was cancelled.')
  }
}

/** Opens the device camera and returns the captured photo as a base64 data URI. */
export async function captureMealPhoto(): Promise<string> {
  try {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 70,
      allowEditing: false,
      saveToGallery: false,
    })
    if (!photo.dataUrl) throw new Error('Photo capture did not return image data.')
    return photo.dataUrl
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    if (/cancel/i.test(message)) throw new PhotoCaptureCancelledError()
    throw new Error(message || 'Camera could not be opened.')
  }
}
