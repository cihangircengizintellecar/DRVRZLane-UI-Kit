import React from 'react';
import classes from './RadioButton.scss';

const mapClassNames = (clsArr) => clsArr.map((c) => c).join(' ');

const RadioButton = function (props) {
  const classNames = [classes.RadioButton, props.checked === true && classes.checked];
  const labelCls = [classes.RadioButton__label, props.large && classes['RadioButton__label--lg']];

  if (props.disabled) {
    classNames.push(classes.disabled);
  }

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
  label: React.PropTypes.string,
  large: React.PropTypes.bool,
  checked: React.PropTypes.bool,
  tabIndex: React.PropTypes.string,
  onChange: React.PropTypes.func,
  displayValue: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.shape({})
  ]),
  disabled: propTypes.bool,
  recordField: React.PropTypes.string,
  selectedValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.shape({})
  ])
};

export default RadioButton;