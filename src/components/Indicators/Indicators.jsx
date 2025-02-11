import PageIndicator from './PageIndicator/PageIndicator'
import { StyledIndicatorsWrap } from './styled'

const Indicators = ({ pages, page, isMobile, flipRef }) => {
  const numberOfSpreads = Math.ceil(pages.length / 2) // on Desktop less indicators

  return (
    <StyledIndicatorsWrap>
      {Array.from({ length: isMobile ? pages.length : numberOfSpreads }).map((_, index) => {
        const isSpreadActive = isMobile ? page === index : page === index * 2 || page === index * 2 + 1 // Active for mobile and desktop

        return <PageIndicator key={index} spreadIndex={index} isActive={isSpreadActive} isMobile={isMobile} flipRef={flipRef} />
      })}
    </StyledIndicatorsWrap>
  )
}
export default Indicators
