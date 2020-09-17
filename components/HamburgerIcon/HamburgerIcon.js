import React, { PropTypes } from 'react';
import HamburgerClasses from './HamburgerIcon.scss';

const HamburgerIcon = function (props) {
  return (
    <div className={`${HamburgerClasses.icon} ${props.isOpen ? HamburgerClasses.open : ''}`} onClick={props.onClick}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

HamburgerIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
};

export default HamburgerIcon;
