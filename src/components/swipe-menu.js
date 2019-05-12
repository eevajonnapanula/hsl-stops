import React, { useState } from "react"
import Swipeable from "react-swipeable"
import Input from "./input"
import AddressSearch from "./address-search"
import { SwipeMenuContainer, Icon } from "./styles"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"


const SwipeMenu = ({ handleInputChange, handleAddressChange }) => {
  const [position, setPosition] = useState(1)

  const onSwiped = () => {
    const newPosition = position === 0 ? 1 : 0
    setPosition(newPosition)
  }
  return (
    <SwipeMenuContainer>
      <Icon size="2em">
        <FaAngleLeft onClick={onSwiped} />
      </Icon>
      <Swipeable
        onSwipedLeft={onSwiped}
        onSwipedRight={onSwiped}
      >
        {position === 0 ? (
          <Input handleChange={handleInputChange} />
        ) : (
          <AddressSearch handleChange={handleAddressChange} />
        )}
      </Swipeable>
      <Icon size="2em">
        <FaAngleRight onClick={onSwiped} />
      </Icon>
    </SwipeMenuContainer>
  )
}

export default SwipeMenu
