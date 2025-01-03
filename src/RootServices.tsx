import { useBackgroundSync } from '@hooks/useBackgroundSync'
import { useSync } from '@hooks/useSync'

export const RootServices = () => {
  useSync()
  useBackgroundSync()

  return null
}
