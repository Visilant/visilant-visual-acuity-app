import { notificationAsync, NotificationFeedbackType } from 'expo-haptics'

export const useHaptics = () => ({
  warning: () => {
    notificationAsync(NotificationFeedbackType.Warning)
  },
  success: () => {
    notificationAsync(NotificationFeedbackType.Success)
  }
})
