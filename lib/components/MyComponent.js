import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.firstColor,
      first: true
    };
    this.switchColor = this.switchColor.bind(this);
  }

  switchColor() {
    this.setState((prevState, props) => ({
      color: prevState.first ? props.secondColor : props.firstColor,
      first: !prevState.first
    }));
  }

  render() {
    return (
      <div
        onClick={this.switchColor}
        style={{ backgroundColor: this.state.color }}
      >
        Hello from MyComponent!
      </div>
    );
  }
}

MyComponent.propTypes = {
  firstColor: PropTypes.string,
  secondColor: PropTypes.string
};

export default MyComponent;
