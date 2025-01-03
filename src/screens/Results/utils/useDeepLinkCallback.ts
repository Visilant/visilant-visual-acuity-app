import { AppConfig } from '@config'
import { Examination } from '@shared/domain/examination'
import { ExaminationMapper } from '@shared/mappers/examination-mapper'
import { useAppDispatch } from '@store'
import { clearDeepLinkParams } from '@store/examinations'
import { DeepLinkParams } from '@store/examinations/types'
import { useCallback } from 'react'
import { Linking } from 'react-native'

const createUrl = (baseUrl: string, callbackId: string, examinationString) =>
  `${baseUrl}/${callbackId}/${encodeURIComponent(examinationString)}`

export const useDeepLinkCallback = () => {
  const dispatch = useAppDispatch()

  const navigateToTelemed = useCallback(
    async (examination: Examination, deepLinkParams: DeepLinkParams) => {
      const examinationString = ExaminationMapper.fromDomainToSerializedResults(examination)
      const { deepLinkBaseUrl } = AppConfig.getConfig()
      const url = createUrl(deepLinkBaseUrl, deepLinkParams.callbackId, examinationString)
      dispatch(clearDeepLinkParams())
      if (await Linking.canOpenURL(url)) {
        Linking.openURL(url)
      }
    },
    [dispatch]
  )
  return {
    navigateToTelemed
  }
}
