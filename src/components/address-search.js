import React from 'react';
import { StyledInput } from './styles';
import { getJSON } from './networking';
import { ListContainer, ListItem, SearchContainer } from './styles';

class AddressSearch extends React.Component {
  state = {
    suggestions: [],
    queryString: '',
    radius: 500,
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

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
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
      lat: suggestion.geometry.coordinates[1],
      radius: this.state.radius
    })
    this.setState({suggestions: [], queryString: ''})
  }

  render() {
    return (
      <SearchContainer>
        <h5>Search by address</h5>
        <StyledInput
          value={this.state.queryString}
          onChange={(e) => this.handleChange('queryString', e.target.value)}
          placeholder="Type an address"
          onKeyPress={(e) => this.handleKeyPress(e)}
        />
      <div>
        <span>Change radius</span>
        <StyledInput
          placeholder="500"
          width="5em"
          type="number"
          value={this.state.radius}
          onChange={(e) => this.handleChange('radius', e.target.value)}
          onKeyPress={(e) => this.handleKeyPress(e)}
          />
        <span>m</span>
      </div>
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
      </SearchContainer>
    )
  }
}

export default AddressSearch;
