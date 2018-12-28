import React from 'react';
import moment from 'moment';
import { Stoptime, ColoredIcon, Header, StopsWrapper, Headsign } from './styles';
import { H2 } from './typography';
import { FaTrain, FaBus, FaSubway, FaCat, FaShip } from 'react-icons/fa';
import TimeWrapper from './time';

const mapping = {
  'FERRY': {
    component: <FaShip />,
  color: '#00B9E4'
},
  'RAIL': {
    component: <FaTrain />,
  color: '#8C4799'
},
  'BUS': {
    component: <FaBus />,
  color: '#007AC9'
},
  'SUBWAY': {
    component: <FaSubway />,
  color: '#FF6319',
},
  'TRAM':  {
    component: <FaCat />,
  color: '#00985F'
  },
}

const Stop = ({stop}) => (
  <div>
    <Header>
      <H2>
        {stop.name}
        <ColoredIcon
          color={mapping[stop.vehicleMode].color}>
           {mapping[stop.vehicleMode].component}
        </ColoredIcon>
      </H2>
    </Header>
    <StopsWrapper>
      {stop.stoptimesWithoutPatterns.map(stoptime => (
        <Stoptime>
          <TimeWrapper animated={stoptime.realtime} time={moment.unix(stoptime.serviceDay + stoptime.realtimeArrival).format('HH:mm')} />
          <Headsign>{stoptime.headsign}</Headsign>
        </Stoptime>
      ))}
    </StopsWrapper>
  </div>
);

export default Stop;
