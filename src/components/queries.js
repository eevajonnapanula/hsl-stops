export const stopsByName = (queryString) => (`
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
        trip {
          routeShortName
        }
      }
    }
  }
`)

export const stopsByLocation = (coordinates) => (`
  {
    stopsByRadius(lat:${coordinates.lat}, lon: ${coordinates.lon}, radius:${coordinates.radius}) {
      edges {
        node {
          stop {
            name
            gtfsId
            vehicleMode
            stoptimesWithoutPatterns(omitNonPickups:true) {
              realtimeArrival
              realtimeDeparture
              realtimeArrival
              realtime
              serviceDay
              pickupType
              headsign
              trip {
                routeShortName
              }
            }
          }
          distance
        }
      }
    }
  }
`)
