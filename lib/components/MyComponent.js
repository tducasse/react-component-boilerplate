import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props => {
  return <div style={{ color: props.color }}>Hello from MyComponent</div>;
};

MyComponent.propTypes = {
  color: PropTypes.string
};

export default MyComponent;
