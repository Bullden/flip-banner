import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* width: 400px; */
  overflow: hidden;
  flex-direction: column;
`

export const StyledButtonWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const StyledButton = styled.div`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease, filter 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    filter: brightness(90%);
  }

  &:active {
    transform: scale(0.95);
    filter: brightness(80%);
  }

  &:focus {
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(80%);

  &:hover, &:active 
    filter: grayscale(80%);
    transform: none;
  }
      `}
`
