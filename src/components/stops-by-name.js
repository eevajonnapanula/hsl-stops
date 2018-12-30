import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Stop from './stop';
import { ColumnDiv } from './styles';
import { stopsByName } from './queries';


const StopsByName = ({queryString}) => {
  const query = stopsByName(queryString);
  return (
  <Query
    query={gql`
      ${query}
    `}
    pollInterval={15000}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (<ColumnDiv>{data.stops.map(stop => (<Stop key={stop.gtfsId} stop={stop} />))}</ColumnDiv>);
    }}
  </Query>
)};

export default StopsByName;
