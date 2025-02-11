import { StyledIndicator } from './styled'

const PageIndicator = ({ spreadIndex, isActive, isMobile, flipRef }) => {
  const handleClick = () => {
    if (flipRef.current) {
      const targetPage = isMobile ? spreadIndex : spreadIndex * 2 // Desktop count / Mobile count
      flipRef.current.pageFlip().flip(targetPage)
    }
  }

  return <StyledIndicator isActive={isActive} onClick={handleClick} />
}

export default PageIndicator
