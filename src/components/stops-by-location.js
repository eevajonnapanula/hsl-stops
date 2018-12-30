import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Stop from './stop';
import { ColumnDiv } from './styles';
import { stopsByLocation } from './queries';


const StopsByName = ({coordinates}) => {
  const query = stopsByLocation(coordinates);
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
      return (<ColumnDiv>{data.stopsByRadius.edges.map(({node}) => (<Stop key={node.stop.gtfsId} stop={node.stop} distance={node.distance}/>))}</ColumnDiv>);
    }}
  </Query>
)};

export default StopsByName;
