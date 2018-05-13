import React from 'react';
import PropTypes from 'prop-types';

const FlyingObjectBase = (props) => {
  const style = {
    fill: '#d7f442',
    stroke: '#d7f442',
  };

  return (
    <ellipse
      cx={props.position.x}
      cy={props.position.y}
      rx="50"
      ry="50"
      style={style}
    />
  );
};

FlyingObjectBase.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObjectBase;