import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Stop from './stop';
import { ColumnDiv, Text } from './styles';
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
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;
      return (
        <ColumnDiv>
          {data.stopsByRadius.edges.length > 0 ?
            <div>
              { data.stopsByRadius.edges.map(({node}) =>
                (
                  <Stop key={node.stop.gtfsId} stop={node.stop} distance={node.distance}/>)
                )
              }
            </div> :
            <Text>
              No results found :(
            </Text>
          }
        </ColumnDiv>);
    }}
  </Query>
)};

export default StopsByName;
