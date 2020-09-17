import PropTypes from 'prop-types';
import React from 'react';
import classes from './RadioButton.scss';

const mapClassNames = (clsArr) => clsArr.map((c) => c).join(' ');

const RadioButton = function (props) {
  const classNames = [classes.RadioButton, props.checked === true && classes.checked];
  const labelCls = [classes.RadioButton__label, props.large && classes['RadioButton__label--lg']];

  const handleKeyPress = (event) => {
    if (event.keyCode === 32) { // space bar
      props.onChange(event);
    }
  };

  return (
    <label className={mapClassNames(classNames)} tabIndex={props.tabIndex} onKeyUp={handleKeyPress}>
      <input
        type="radio"
        className={classes.RadioButton__input}
        value={props.value}
        name={props.recordField}
        onChange={props.onChange}
        onClick={props.onChange}
      />
      <span className={classes.RadioButton__styledInput}>
        <span className={classes.RadioButton__styledInputChecked} />
      </span>
      <span className={mapClassNames(labelCls)}>{props.label}</span>
    </label>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string,
  large: PropTypes.bool,
  checked: PropTypes.bool,
  tabIndex: PropTypes.string,
  onChange: PropTypes.func,
  displayValue: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({})
  ]),
  recordField: PropTypes.string,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({})
  ])
};

export default RadioButton;