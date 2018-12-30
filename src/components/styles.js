import styled, {keyframes} from 'styled-components'

const changeColor = keyframes`
  0% {
    color: rgb(255,255,255);
  }

  50% {
    color: rgb(240,146,205);
  }

  100% {
    color: rgb(255,255,255);
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
  align-items: center;
  width: 100%;

`

export const StyledInput = styled.input.attrs({
    placeholder: props => props.placeholder || ''
  })`

  border: 1px solid black;
  padding: 1em;
  border-radius: 0.5em;
  margin: 0.5em;
  width: 20em;
`

export const Header = styled.div`
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  display: flex;
  justify-content: flex-start;
  padding-left: 1.5em;
  background-color: ${props => props.color};
`

export const StopTimesWrapper = styled.div`
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5em;
  margin-bottom: 1em;
  color: white;
`
export const Time = styled.span`
  margin-right: 1em;
  width: 1em;
`
export const AnimatedTime = styled.span`
  margin-right: 1em;
  animation: ${changeColor} 10s linear infinite;
`
export const Headsign = styled.span`

`

export const ColoredIcon = styled.span`
  color: ${props => props.color};
  padding-right: 0.5em;
`
export const Wrapper = styled.div`
  width: 100%;
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

export const StopWrapper = styled.div`
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  mergin-bottom: 1em;
  color: white;
  margin-top: 1em;
  background-color: ${props => props.color.substring(0,props.color.length - 3) + ",0.8)"};

  @media (max-width: 480px) {
    width: 17.5em;
  }

  @media (min-width: 480px) {
    width: 22.5em;
  }
`

export const ListContainer = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 0.5em;
  width: 25em;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid black;
  width: 100%;
  padding-top: 1em;
  padding-bottom: 1em;

  :last-child {
    border-bottom: none;
  }
`
export const AddressSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  padding: 1em;
`
