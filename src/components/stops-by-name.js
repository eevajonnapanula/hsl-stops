import React from 'react'
import { Query } from "react-apollo"
import Stop from './stop'
import { ColumnDiv, Text } from './styles'
import { stopsByName } from './queries'


const StopsByName = ({queryString}) => {
  const query = stopsByName(queryString)
  return (
  <Query
    query={query}
    pollInterval={15000}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error :(</Text>
      return (
        <ColumnDiv>
          {data.stops.length > 0 ?
            <div>
              { data.stops.map((stop) =>
                (
                  <Stop key={stop.gtfsId} stop={stop} />)
                )
              }
            </div> :
            <Text>
              No results found :(
            </Text>
          }
        </ColumnDiv>)
    }}
  </Query>
)}

export default StopsByName
