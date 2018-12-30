import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import StopsByName from './components/stops-by-name';
import StopsByLocation from './components/stops-by-location';
import Input from './components/input';
import { Wrapper } from './components/styles';

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

class App extends Component {
  state = {
    queryString: '',
    coordinates: {
      lat: 60.170,
      lon: 24.936,
      radius: 500,
    },
    isLocation: true
  }

  handleInputChange = (changed) => {
    if (changed.length > 2) {
      this.setState({
        queryString: changed,
        isLocation: false
      })
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Wrapper>
          <Input handleChange={this.handleInputChange} />
          {this.state.isLocation ?
            <StopsByLocation coordinates={this.state.coordinates} /> :
            <StopsByName queryString={this.state.queryString} /> }
        </Wrapper>
      </ApolloProvider>
    )}
}

export default App;
