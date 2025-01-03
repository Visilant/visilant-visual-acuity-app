import { Text, TextStyles, FlexBox } from '@components'

import { BoxItem } from './styles'
import { ResultItemProps } from './types'
import { useResultDisplay } from '@hooks/useResultDisplay'

const ResultItem = (props: ResultItemProps) => {
  const { sideTitle, result, hasBorder } = props
  const { createResultText } = useResultDisplay()
  const resultDisplay = createResultText(result)
  return (
    <BoxItem hasBorder={hasBorder}>
      <FlexBox>
        <Text namespace="test" text={sideTitle} textStyle={TextStyles.CardLabel} />
      </FlexBox>
      <Text raw text={resultDisplay} textStyle={TextStyles.SmallCardNumber} />
    </BoxItem>
  )
}
export default ResultItem
