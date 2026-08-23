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

