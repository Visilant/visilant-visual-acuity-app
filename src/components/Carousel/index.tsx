import React, { useRef, useState } from 'react'
import PagerView from 'react-native-pager-view'
import { ComponentType } from './types'
import { PageIndicator, PageIndicatorRow, StyledPagerView } from './styles'

export const Carousel: ComponentType = ({
  children,
  onPageChange,
  onScrollStateChanged,
  ...props
}) => {
  const [pageIndex, setPageIndex] = useState(0)
  const pagerRef = useRef<PagerView>(null)

  const handlePageSelected = ({ nativeEvent }) => {
    onPageChange?.(nativeEvent.position)
    setPageIndex(nativeEvent.position)
  }

  const handleIndicatorPressed = (index: number) => {
    pagerRef.current?.setPage(index)
  }

  const handleScrollStateChanged = ({ nativeEvent }) => {
    onScrollStateChanged?.(nativeEvent.pageScrollState)
  }

  return (
    <>
      <StyledPagerView
        ref={pagerRef}
        onPageSelected={handlePageSelected}
        onPageScrollStateChanged={handleScrollStateChanged}
        initialPage={0}
        pageMargin={30}
        {...props}
      >
        {children}
      </StyledPagerView>

      <PageIndicatorRow>
        {React.Children.map(children, (child, i) => {
          return (
            <PageIndicator
              accessibilityLabel={`Jump to page ${i + 1}`}
              onPress={() => handleIndicatorPressed(i)}
              selected={i === pageIndex}
            />
          )
        })}
      </PageIndicatorRow>
    </>
  )
}
