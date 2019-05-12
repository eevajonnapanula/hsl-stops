import React, { useState } from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import StopsByName from './components/stops-by-name'
import StopsByLocation from './components/stops-by-location'
import { Wrapper } from './components/styles'
import SwipeMenu from './components/swipe-menu'

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
})

const App = () => {
  const storedCoordinates = JSON.parse(localStorage.getItem('coordinates'))

  const defaultCoordinates =  {
    lat: storedCoordinates ? storedCoordinates.lat : 60.170,
    lon: storedCoordinates ? storedCoordinates.lon : 24.936,
    radius: storedCoordinates ? storedCoordinates.radius : 500,
  }

  const [ queryString, setQueryString ] = useState('')
  const [ coordinates, setCoordinates ] = useState(defaultCoordinates)
  const [ isLocation, setIsLocation ] = useState(false)

  const handleInputChange = (changed) => {
    if (changed.length > 2) {
      setQueryString(changed)
      setIsLocation(false)
    }
  }

  const handleAddressChange = (input) => {
    const newCoordinates = {
      lat: input.lat,
      lon: input.lon,
      radius: input.radius
    }
    setIsLocation(true)
    setCoordinates(newCoordinates)
    localStorage.setItem('coordinates', JSON.stringify(newCoordinates))
  }
  
    return (
      <ApolloProvider client={client}>
        <Wrapper>
          <SwipeMenu handleAddressChange={handleAddressChange} handleInputChange={handleInputChange} />
          {isLocation ?
            <StopsByLocation coordinates={coordinates} /> :
            <StopsByName queryString={queryString} /> }
        </Wrapper>
      </ApolloProvider>
    )
}

export default App
