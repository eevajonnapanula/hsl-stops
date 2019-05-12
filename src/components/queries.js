import gql from "graphql-tag"

export const stopsByName = queryString => gql`
  {
    stops(name: "${queryString}") {
      ...StopFragment
    }
  }

  ${stopFragment}
`

export const stopsByLocation = coordinates => gql`
  {
    stopsByRadius(lat:${coordinates.lat}, lon: ${coordinates.lon}, radius:${
  coordinates.radius
}) {
      edges {
        node {
          stop {
            ...StopFragment
          }
          distance
        }
      }
    }
  }

  ${stopFragment}
`

const stopFragment = gql`
  fragment StopFragment on Stop {
    name
    gtfsId
    vehicleMode
    stoptimesWithoutPatterns(omitNonPickups: true) {
      realtimeDeparture
      realtimeArrival
      realtime
      serviceDay
      headsign
      trip {
        routeShortName
      }
    }
  }
`
