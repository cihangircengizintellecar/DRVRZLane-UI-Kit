import React from 'react';
import classes from './ExpandButton.scss';
import expandImage from './expand.png';

const ExpandButton = function (props) {
  return (
    <img src={expandImage} className={classes.ExpandButton} onClick={props.onClick} />
  );
};

ExpandButton.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node
};

export default ExpandButton;
