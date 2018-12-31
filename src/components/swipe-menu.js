import React from 'react';
import Swipeable from 'react-swipeable';
import posed, { PoseGroup } from 'react-pose';
import Input from './input';
import AddressSearch from './address-search';
import { SwipeMenuContainer, Icon } from './styles';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const PosedWrapper = posed.div({
  enter: {
    x: '0%',
    opacity: 1,
    transition: {
      opacity: { ease: 'easeIn', duration: 1000 },
    }
  },
  exit: {
    x: ({ direction }) => direction === 'right' ? '100%' : '-100%',
    opacity: 0,
    transition: {
      opacity: { ease: 'easeOut', duration: 500 },
    }
  }
})

class SwipeMenu extends React.Component {
  state = {
    direction: 'right',
    position: 1,
  }

  onSwiped = (direction) => {
    const position = this.state.position === 0 ? 1 : 0;
    this.setState({
      position,
      direction
    })
   }

  handleInputChange = (input) => {
    this.props.handleInputChange(input)
  }

  handleAddressChange = (input) => {
    this.props.handleAddressChange(input);
  }

  render() {
    return (
      <SwipeMenuContainer>
        <Icon size='2em'>
          <FaAngleLeft onClick={() => this.onSwiped('left')} />
        </Icon>
        <Swipeable
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
        >
          <PoseGroup direction={this.state.direction}>
            {this.state.position === 0 ?
              <PosedWrapper key="input">
                <Input handleChange={this.handleInputChange} />
              </PosedWrapper> :
              <PosedWrapper key="adressSearch">
                <AddressSearch handleChange={this.handleAddressChange} />
              </PosedWrapper> }
          </PoseGroup>
        </Swipeable>
        <Icon size='2em'>
          <FaAngleRight onClick={() => this.onSwiped('right')} />
        </Icon>
      </SwipeMenuContainer>
    )
  }
}

export default SwipeMenu;
