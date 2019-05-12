import React, { useState, useEffect } from 'react'
import { StyledInput } from './styles'
import { getJSON } from './networking'
import { ListContainer, ListItem, SearchContainer } from './styles'

const AddressSearch = ({ handleChange }) => {
  const [ suggestions, setSuggestions ] = useState([])
  const [ queryString, setQueryString ] = useState('')
  const [ radius, setRadius ] = useState(500)
  const [ search, setSearch ] = useState('')
  const [ pose, setPose ] = useState('closed') 

  

  useEffect(() => {
    const handleAddressChange = async () => {
      if (search.length > 2) {
      const url = `https://api.digitransit.fi/geocoding/v1/autocomplete?text=${search}&focus.point.lat=60.17&focus.point.lon=24.93`
      const res = await getJSON(url)

      setSuggestions(res.features)
      setPose('open')
      }
  }
    handleAddressChange()
  }, [search])



  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setPose('closed')
      setSearch(queryString)
    }
  }

  const handleInputChange = e => {
    setQueryString(e.target.value)
    if (e.target.value.length > 2) {
      setSearch(e.target.value)
    }
  }

  const handleClick = suggestion => {
    handleChange({
      lon: suggestion.geometry.coordinates[0],
      lat: suggestion.geometry.coordinates[1],
      radius: radius
    })
    setPose('closed')
    setSuggestions([])
    setQueryString('')
  }

  return (
    <SearchContainer>
        <h5>Search by address</h5>
        <StyledInput
          value={queryString}
          onChange={handleInputChange}
          placeholder="Type an address"
          onKeyPress={handleKeyPress}
        />
      <div>
        <span>Change radius</span>
        <StyledInput
          placeholder="500"
          width="5em"
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          onKeyPress={handleKeyPress}
          />
        <span>m</span>
      </div>
        <ListContainer visible={suggestions.length > 0} pose={pose}>
          { suggestions.map(suggestion => (
              <ListItem
                key={suggestion.properties.id}
                onClick={() => handleClick(suggestion)}>
                {suggestion.properties.label}
              </ListItem>
            )
          )}
        </ListContainer>
      </SearchContainer>
  )

}


export default AddressSearch
