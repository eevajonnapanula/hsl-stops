import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Stops from './components/stops';
import Input from './components/input';
import { Wrapper } from './components/styles'
const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

class App extends Component {
  state = {
    queryString: ''
  }

  handleInputChange = (changed) => {
    if (changed.length > 2) {
      this.setState({
        queryString: changed
      })
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Wrapper>
          <Input handleChange={this.handleInputChange} />
          <Stops queryString={this.state.queryString} />
        </Wrapper>
      </ApolloProvider>
    )}
}

export default App;
