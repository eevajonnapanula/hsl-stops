import React from 'react'
import moment from 'moment'
import { Stoptime, ColoredIcon, Header, StopTimesWrapper, Headsign, StopWrapper } from './styles'
import { H2 } from './typography'
import { FaTrain, FaBus, FaSubway, FaCat, FaShip } from 'react-icons/fa'
import TimeWrapper from './time'

const mapping = {
  'FERRY': {
    component: <FaShip />,
  color: 'rgba(0,185,228,1)'
},
  'RAIL': {
    component: <FaTrain />,
  color: 'rgba(140,71,153,1)'
},
  'BUS': {
    component: <FaBus />,
  color: 'rgba(0,122,201,1)'
},
  'SUBWAY': {
    component: <FaSubway />,
  color: 'rgba(255,99,25,1)',
},
  'TRAM':  {
    component: <FaCat />,
  color: 'rgba(0,152,95,1)'
  },
  null: {
    component: <FaShip />,
  color: 'rgba(0,185,228,1)'
},
}

const getTimeInMinutes = (stoptime) => {
  return moment.unix(stoptime.serviceDay + stoptime.realtimeArrival).diff(moment(), 'minutes')
}

const getFormattedTime = (stoptime) => {
  return moment.unix(stoptime.serviceDay + stoptime.realtimeArrival).format('HH:mm')
}

const Stop = ({stop, distance}) => (
  <StopWrapper color={mapping[stop.vehicleMode].color}>
    <Header color={mapping[stop.vehicleMode].color}>
      <H2>
        <ColoredIcon
          color="white">
           {mapping[stop.vehicleMode].component}
        </ColoredIcon>
        {stop.name}
        {distance && ` ${distance} m`} 
      </H2>
    </Header>
    <StopTimesWrapper>
      {stop.stoptimesWithoutPatterns.map((stoptime, i) => (
        <Stoptime key={i}>
          <TimeWrapper
            animated={stoptime.realtime}
            time={getTimeInMinutes(stoptime) < 10 ? getTimeInMinutes(stoptime) + ' min' : getFormattedTime(stoptime) }
            />
          <Headsign>{stoptime.trip.routeShortName} {stoptime.headsign}</Headsign>
        </Stoptime>
      ))}
    </StopTimesWrapper>
  </StopWrapper>
)

export default Stop
