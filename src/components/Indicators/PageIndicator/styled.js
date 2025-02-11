import styled from 'styled-components'

export const StyledIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isActive ? '#555' : '#ccc')};
  margin: 0 5px;
  cursor: pointer;
`
