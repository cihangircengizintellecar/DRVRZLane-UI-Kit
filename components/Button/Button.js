import PropTypes from 'prop-types';
import React from 'react';
import classes from './Button.scss';

const Button = function (props) {
  const classNames = ['Button', `size__${props.size}`, `${props.theme}`, `${props.type}`];
  if (props.className) {
    classNames.push(props.className);
  }

  return (
    <button
      className={classNames.map((c) => classes[c] || c).join(' ')}
      onClick={props.onClick}
      disabled={props.disabled}
      {...props.buttonAttrs}
    >
      {props.icon &&
        <img src={props.icon} className={classes.icon} />
      }
      {props.label}
      {props.children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  buttonAttrs: PropTypes.shape({}),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Button;