import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Stop from './stop';
import { ColumnDiv } from './styles'

const Stops = ({queryString}) => (
  <Query
    query={gql`
      {
        stops(name: "${queryString}") {
          name
          gtfsId
          vehicleMode
          stoptimesWithoutPatterns(omitNonPickups:true) {
            realtimeArrival
            realtimeDeparture
            realtimeArrival
            realtime
            serviceDay
            headsign
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (<ColumnDiv>{data.stops.map(stop => (<Stop key={stop.gtfsId} stop={stop} />))}</ColumnDiv>);
    }}
  </Query>
);

export default Stops;
