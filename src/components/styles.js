import styled, {keyframes} from 'styled-components'

const changeColor = keyframes`
  0% {
    color: red;
  }

  50% {
    color: blue;
  }

  100% {
    color: red;
  }
`;


export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledInput = styled.input`
  border: 1px solid black;
  padding: 1em;
  border-radius: 0.5em;
  width: 90%;
  margin: 0.5em;
`

export const Header = styled.div`
  border-radius: 0.5em;
  display: flex;
  justify-content: flex-start;
  margin-top: 1em;
  margin-left: 1.5em;
`

export const StopsWrapper = styled.div`
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  mergin-bottom: 1em;
`
export const Time = styled.span`
  margin-right: 1em;
  color: red;
`
export const AnimatedTime = styled.span`
  margin-right: 1em;
  animation: ${changeColor} 10s linear infinite;
`
export const Headsign = styled.span`
  color: brown;
`

export const ColoredIcon = styled.span`
  color: ${props => props.color};
  padding-left: 0.5em;
`
export const Wrapper = styled.div`
  width: 75%;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;
  display: flex;
  align-items: center;
`

export const Stoptime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 0.25em;
  margin-left: 0.5em;
  margin-right: 0.5em;
`
