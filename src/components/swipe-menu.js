import React from 'react';
import Swipeable from 'react-swipeable';
import Input from './input';
import AddressSearch from './address-search';
import { SwipeMenuContainer, Icon } from './styles';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

class SwipeMenu extends React.Component {
  state = {
    direction: 'right',
    position: 0,
  }

  onSwiped = () => {
    const position = this.state.position === 0 ? 1 : 0;
    this.setState({ position })
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
          <FaAngleLeft onClick={this.onSwiped} />
        </Icon>
        <Swipeable
          onSwipedLeft={() => this.onSwiped()}
          onSwipedRight={() => this.onSwiped()}
        >
            {this.state.position === 0 ? <Input handleChange={this.handleInputChange} /> : <AddressSearch handleChange={this.handleAddressChange} /> }
        </Swipeable>
        <Icon size='2em'>
          <FaAngleRight onClick={this.onSwiped} />
        </Icon>
      </SwipeMenuContainer>
    )
  }
}

export default SwipeMenu;
