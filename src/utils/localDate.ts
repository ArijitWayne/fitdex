/** Returns a stable calendar-day key using local, never UTC, date fields. */
export function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function isLocalToday(dateKey: string, referenceDate = new Date()) {
  return dateKey === getLocalDateKey(referenceDate)
}

/** Parses a YYYY-MM-DD key at local midnight. */
export function dateFromLocalDateKey(dateKey: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateKey)
  if (!match) throw new Error('Invalid local date key.')
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  if (getLocalDateKey(date) !== dateKey) throw new Error('Invalid local date key.')
  return date
}

export function shiftLocalDateKey(dateKey: string, amount: number) {
  const date = dateFromLocalDateKey(dateKey)
  date.setDate(date.getDate() + amount)
  return getLocalDateKey(date)
}

/** Inclusive/exclusive timestamps for a local calendar day. */
export function getLocalDayTimestampRange(dateKey: string) {
  const start = dateFromLocalDateKey(dateKey)
  const end = new Date(start)
  end.setDate(end.getDate() + 1)
  return { startTimestamp: start.getTime(), endTimestamp: end.getTime() }
}
