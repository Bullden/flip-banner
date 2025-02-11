import { useEffect, useRef, useState } from 'react'
import ReactPageFlip from 'react-pageflip'
import useWindowSize from '../../hooks/useWindowSize'
import { StyledContentPage, StyledContentTextPage, StyledImg, StyledPage, StyledText, StyledTitle } from './styled'

const PageFlip = ({ pages, flipRef, setIsMobile, handlePageChange }) => {
  const [containerWidth, setContainerWidth] = useState(485)

  const { width } = useWindowSize()

  const breakpoints = [768, 1060]
  const widthsForBreakpoints = {
    tablet: 350,
    desktopSmall: 385,
    desktopLarge: 485,
  }
  const currentBreakpointCategory = useRef(null)

  useEffect(() => {
    // Resize for react-pageflip ( can't do it by css ) using breakpoints and hook that observe window size
    const handleResize = () => {
      let calculatedWidth = widthsForBreakpoints.desktopLarge
      let currentCategory = 'desktopLarge'

      if (width < breakpoints[1]) {
        calculatedWidth = widthsForBreakpoints.tablet
        currentCategory = 'tablet'
      } else if (width < breakpoints[2]) {
        calculatedWidth = widthsForBreakpoints.desktopSmall
        currentCategory = 'desktopSmall'
      } else {
        calculatedWidth = widthsForBreakpoints.desktopLarge
        currentCategory = 'desktopLarge'
      }
      setIsMobile(width < breakpoints[0])

      if (currentCategory !== currentBreakpointCategory.current) {
        setContainerWidth(calculatedWidth)
        currentBreakpointCategory.current = currentCategory
      }
    }

    handleResize()
  }, [width, breakpoints, widthsForBreakpoints])

  return (
    <ReactPageFlip
      key={containerWidth}
      ref={flipRef}
      width={containerWidth}
      height={250}
      maxShadowOpacity={0.5}
      showCover={false}
      startPage={0}
      onFlip={handlePageChange}
    >
      {pages.map((item, index) => (
        <StyledPage key={index}>
          {item.image ? (
            <StyledContentPage>
              <StyledImg src={item.image} />
            </StyledContentPage>
          ) : (
            <StyledContentTextPage>
              <StyledTitle>{item.title}</StyledTitle>
              <StyledText>{item.description}</StyledText>
            </StyledContentTextPage>
          )}
        </StyledPage>
      ))}
    </ReactPageFlip>
  )
}
export default PageFlip
