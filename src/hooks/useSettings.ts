import { useCallback, useEffect } from 'react'
import { useAppDispatch } from '@store'
import { useMappedSelector } from '@hooks/useMappedSelector'
import { getSettingsThunk, selectUserSettings, updateSettingsThunk } from '@store/settings'
import { UserSettingsMapper } from '@shared/mappers/settings-mapper'
import { UserSettings } from '@shared/domain/settings'

const useSyncSettings = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSettingsThunk())
  }, [])
}

export const useSettings = () => {
  const dispatch = useAppDispatch()

  const updateSettings = useCallback(
    (settings: UserSettings): void => {
      dispatch(updateSettingsThunk(UserSettingsMapper.toUpdateRequest(settings)))
    },
    [dispatch]
  )

  const settings = useMappedSelector(selectUserSettings, UserSettingsMapper.fromStoreToDomain)
  useSyncSettings()

  return { settings, updateSettings }
}
