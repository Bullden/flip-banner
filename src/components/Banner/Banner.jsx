import React, { useRef, useState, useEffect } from 'react'
import Indicators from '../Indicators/Indicators'
import PageFlip from '../PageFlip/PageFlip'
import { pages } from './pages'
import { StyledButton, StyledButtonWrap, StyledContainer } from './styled'

const Banner = () => {
  const [page, setPage] = useState(0)
  const flipRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoDirection, setAutoDirection] = useState('forward')

  const handlePlayStop = () => {
    setIsPlaying(!isPlaying)
  }
  const correctPage = isMobile ? page : page + 1

  useEffect(() => {
    // Manage AutoPlay

    let intervalId
    if (isPlaying) {
      intervalId = setInterval(() => {
        if (autoDirection === 'forward') {
          if (correctPage < pages.length - 1) {
            handleNextPage()
          } else {
            setAutoDirection('backward')
            handlePrevPage()
          }
        } else {
          if (page > 0) {
            handlePrevPage()
          } else {
            setAutoDirection('forward')
            handleNextPage()
          }
        }
      }, 3000)
    } else {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [isPlaying, autoDirection, page])

  const handlePageChange = e => {
    setPage(e.data)
  }

  const handleNextPage = () => {
    if (flipRef.current) {
      flipRef.current.pageFlip().flipNext()
    }
  }

  const handlePrevPage = () => {
    if (flipRef.current) {
      flipRef.current.pageFlip().flipPrev()
    }
  }
  const handleBannerClick = () => {
    if (isPlaying) {
      handlePlayStop()
    }
  }

  return (
    <StyledContainer onClick={handleBannerClick}>
      <h2>Product Showcase</h2>
      <PageFlip pages={pages} flipRef={flipRef} handlePageChange={handlePageChange} setIsMobile={setIsMobile} />
      <Indicators pages={pages} page={page} isMobile={isMobile} flipRef={flipRef} />

      <StyledButtonWrap>
        <StyledButton onClick={handlePrevPage} disabled={page === 0}>
          Prev
        </StyledButton>
        <StyledButton onClick={handleNextPage} disabled={correctPage === pages.length - 1}>
          Next
        </StyledButton>
      </StyledButtonWrap>

      <StyledButton onClick={handlePlayStop}>{isPlaying ? 'Stop' : 'Play'}</StyledButton>
    </StyledContainer>
  )
}

export default Banner
