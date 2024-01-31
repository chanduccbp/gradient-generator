// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  outline: none;
  background-color: #ffffff;
  opacity: ${props => (props.active ? 1 : 0.5)};
  color: ${props => (props.active ? '#1e293b' : '#334155')};
  border-radius: 5px;
  border-style: none;
  height: 30px;
  padding: 5px;
`
export const ListItem = styled.li`
  margin: 5px;
`
