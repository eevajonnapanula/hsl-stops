import React from 'react';
import { StyledInput } from './styles';
import { getJSON } from './networking';
import { ListContainer, ListItem, AddressSearchContainer } from './styles';

class AddressSearch extends React.Component {
  state = {
    suggestions: [],
    queryString: '',
  }

  handleAddressChange = async () => {
    if (this.state.queryString.length > 2) {
      const url = `https://api.digitransit.fi/geocoding/v1/autocomplete?text=${this.state.queryString}&focus.point.lat=60.17&focus.point.lon=24.93`;
      const res = await getJSON(url);

      this.setState({
        suggestions: res.features
      })
    }
  }

  handleChange = (value) => {
    this.setState({
      queryString: value
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleAddressChange()
    }
  }

  handleClick = (suggestion) => {
    this.props.handleChange({
      lon: suggestion.geometry.coordinates[0],
      lat: suggestion.geometry.coordinates[1]
    })
    this.setState({suggestions: [], queryString: ''})
  }

  render() {
    return (
      <AddressSearchContainer>
        <StyledInput
          value={this.state.queryString}
          onChange={(e) => this.handleChange(e.target.value)}
          placeholder="Type an address"
          onKeyPress={(e) => this.handleKeyPress(e)}
        />
        <ListContainer visible={this.state.suggestions.length > 0}>
          { this.state.suggestions.map(suggestion => (
              <ListItem
                key={suggestion.properties.id}
                onClick={() => this.handleClick(suggestion)}>
                {suggestion.properties.label}
              </ListItem>
            )
          )}
        </ListContainer>
      </AddressSearchContainer>
    )
  }
}

export default AddressSearch;
