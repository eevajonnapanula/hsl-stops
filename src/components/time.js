import React from 'react'
import { Time, AnimatedTime } from './styles'

const TimeWrapper = ({animated, time}) => (
  <div>
    {animated ? <AnimatedTime>{time}</AnimatedTime> : <Time>{time}</Time>}
  </div>

)

export default TimeWrapper
