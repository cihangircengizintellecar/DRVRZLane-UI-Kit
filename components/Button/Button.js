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
  size: React.PropTypes.string,
  theme: React.PropTypes.string,
  type: React.PropTypes.string,
  onClick: React.PropTypes.func,
  buttonAttrs: React.PropTypes.shape({}),
  disabled: React.PropTypes.bool,
  label: React.PropTypes.string,
  icon: React.PropTypes.string,
  className: React.PropTypes.string,
  children: React.PropTypes.node
};

export default Button;
