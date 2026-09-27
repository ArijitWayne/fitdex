import { Capacitor } from '@capacitor/core'
import { LocalNotifications } from '@capacitor/local-notifications'
import { brandingFamilyForTheme, brandingForTheme } from '../../branding/branding.ts'
import type { ThemeFamily } from '../../theme/theme.ts'
import type { NotificationPermissionState } from '../../data/models.ts'
import { NOTIFICATION_CHANNELS, NOTIFICATION_SOUND_PATHS, type NotificationCategory } from './notificationModel.ts'
import type { NotificationPayload } from './notificationRules.ts'

const NATIVE_IDS: Record<NotificationCategory, number> = { update: 9100, workout: 9101, nutrition: 9102 }
const routeEvent = 'fitdex:notification-route'

function native() { return Capacitor.isNativePlatform() }

export function currentNotificationPermission(): NotificationPermissionState {
  if (native()) return 'unrequested'
  if (typeof Notification === 'undefined') return 'unsupported'
  if (Notification.permission === 'granted') return 'granted'
  if (Notification.permission === 'denied') return 'denied'
  return 'unrequested'
}

export async function requestNotificationPermission(): Promise<NotificationPermissionState> {
  if (native()) {
    const result = await LocalNotifications.requestPermissions()
    return result.display === 'granted' ? 'granted' : 'denied'
  }
  if (typeof Notification === 'undefined') return 'unsupported'
  return (await Notification.requestPermission()) as NotificationPermissionState
}

export async function prepareNativeNotificationChannels() {
  if (!native()) return
  await Promise.all((Object.keys(NOTIFICATION_CHANNELS) as NotificationCategory[]).map((category) => LocalNotifications.createChannel({
    id: NOTIFICATION_CHANNELS[category],
    name: `FitDex ${category[0].toUpperCase()}${category.slice(1)}`,
    description: `FitDex ${category} notifications`,
    importance: 4,
    visibility: 1,
    sound: category === 'update' ? 'update_notification' : category === 'workout' ? 'morning_notification' : 'warning_notification',
  })))
}

export async function cancelScheduledNotification(category: NotificationCategory) {
  if (native()) await LocalNotifications.cancel({ notifications: [{ id: NATIVE_IDS[category] }] })
}

export async function cancelAllScheduledNotifications() {
  await Promise.all((Object.keys(NATIVE_IDS) as NotificationCategory[]).map(cancelScheduledNotification))
}

export async function deliverNotification(payload: NotificationPayload, family: ThemeFamily, at?: Date) {
  const icon = brandingForTheme(family).icon
  if (native()) {
    await prepareNativeNotificationChannels()
    await LocalNotifications.cancel({ notifications: [{ id: NATIVE_IDS[payload.category] }] })
    await LocalNotifications.schedule({ notifications: [{
      id: NATIVE_IDS[payload.category], title: payload.title, body: payload.body,
      channelId: NOTIFICATION_CHANNELS[payload.category], smallIcon: 'fitdex_notification_small', largeIcon: `fitdex_notification_${brandingFamilyForTheme(family)}`,
      extra: { destination: payload.category }, schedule: at ? { at } : undefined,
    }] })
    return
  }
  if (!at && typeof Notification !== 'undefined' && Notification.permission === 'granted') {
    const notification = new Notification(payload.title, { body: payload.body, icon, data: { destination: payload.category } })
    notification.onclick = () => { window.focus(); window.dispatchEvent(new CustomEvent(routeEvent, { detail: payload.category })); notification.close() }
  }
}

export function onNotificationRoute(handler: (category: NotificationCategory) => void) {
  const web = (event: Event) => handler((event as CustomEvent<NotificationCategory>).detail)
  window.addEventListener(routeEvent, web)
  let nativeListener: { remove: () => Promise<void> } | undefined
  void (async () => {
    if (!native()) return
    nativeListener = await LocalNotifications.addListener('localNotificationActionPerformed', (event) => handler(event.notification.extra?.destination as NotificationCategory))
  })()
  return () => { window.removeEventListener(routeEvent, web); void nativeListener?.remove() }
}

export function notificationSoundPath(category: NotificationCategory) { return NOTIFICATION_SOUND_PATHS[category] }
