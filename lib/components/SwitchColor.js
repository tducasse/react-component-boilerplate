import React from 'react';
import PropTypes from 'prop-types';

class SwitchColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.colors[0]
    };
  }

  switchColor = () => {
    this.setState((prevState, props) => ({
      color:
        prevState.color === props.colors[0] ? props.colors[1] : props.colors[0]
    }));
  };

  render() {
    return this.props.children(this.state.color, this.switchColor);
  }
}

SwitchColor.propTypes = {
  children: PropTypes.func,
  colors: PropTypes.arrayOf(PropTypes.string)
};

export default SwitchColor;
