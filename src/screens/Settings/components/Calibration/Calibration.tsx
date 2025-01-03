import { useTranslation } from 'react-i18next'
import React from 'react'
import { CalibrationContainer, CalibrationTextStyle, WideCardRow } from '@screens/Settings/styles'
import { Button, Text, TextStyles } from '@components'
import dayjs from 'dayjs'
import { SizeEnum } from '@components/types'

export const Calibration = () => {
  const { t } = useTranslation('screens')

  return (
    <WideCardRow>
      <CalibrationContainer>
        <Text namespace="screens" text="settings.calibration.title" textStyle={TextStyles.Label} />
        <Text
          raw={true}
          text={t('settings.calibration.date', {
            date: dayjs(dayjs().unix()).format('DD MMM YYYY')
          })}
          textStyle={CalibrationTextStyle}
        />
      </CalibrationContainer>
      <Button
        namespace="screens"
        text="settings.calibration.button"
        capitalize={true}
        size={SizeEnum.small}
        onPress={() => {}}
      />
    </WideCardRow>
  )
}
