import { Directory, Encoding, Filesystem } from '@capacitor/filesystem'
import { FITDEX_BACKUP_MIME_TYPE, type BackupSummary, type FitDexBackup } from './backupTypes.ts'
import { isAndroidNativePlatform } from './backupValidation.ts'

const pad = (value: number) => String(value).padStart(2, '0')

export const FITDEX_BACKUP_DOCUMENTS_DIR = 'FitDex'

export interface BackupExportResult {
  success: boolean
  filename: string
  savedPath?: string
  uri?: string
}

export function serializeFitDexBackup(backup: FitDexBackup) {
  return JSON.stringify(backup, null, 2)
}

export function fitDexBackupFilename(createdAt: Date) {
  const date = `${createdAt.getFullYear()}-${pad(createdAt.getMonth() + 1)}-${pad(createdAt.getDate())}`
  const time = `${pad(createdAt.getHours())}${pad(createdAt.getMinutes())}`
  return `fitdex-backup-${date}-${time}.fitdex`
}

export function downloadFitDexBackup(backup: FitDexBackup, createdAt = new Date(backup.createdAt)) {
  const blob = new Blob([serializeFitDexBackup(backup)], { type: FITDEX_BACKUP_MIME_TYPE })
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = objectUrl
  link.download = fitDexBackupFilename(createdAt)
  link.hidden = true
  document.body.append(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(objectUrl), 0)
}

export async function exportFitDexBackup(
  backup: FitDexBackup,
  isAndroid: boolean = isAndroidNativePlatform(),
  createdAt = new Date(backup.createdAt)
): Promise<BackupExportResult> {
  const filename = fitDexBackupFilename(createdAt)

  if (!isAndroid) {
    downloadFitDexBackup(backup, createdAt)
    return { success: true, filename }
  }

  const relativePath = `${FITDEX_BACKUP_DOCUMENTS_DIR}/${filename}`
  const serialized = serializeFitDexBackup(backup)

  const writeResult = await Filesystem.writeFile({
    path: relativePath,
    data: serialized,
    directory: Directory.Documents,
    encoding: Encoding.UTF8,
    recursive: true,
  })

  return {
    success: true,
    filename,
    savedPath: `Documents/${FITDEX_BACKUP_DOCUMENTS_DIR}/${filename}`,
    uri: writeResult.uri,
  }
}

export function summarizeFitDexBackup(backup: FitDexBackup): BackupSummary {
  return {
    workoutCount: backup.data.workouts.filter((record) => record.status === 'completed').length,
    foodLogCount: backup.data.foodLogEntries.length,
    routineCount: backup.data.workoutRoutines.length,
    achievementCount: backup.data.achievementUnlocks.length,
  }
}


