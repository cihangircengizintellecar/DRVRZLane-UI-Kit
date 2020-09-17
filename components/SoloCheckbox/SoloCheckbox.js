import React, { PropTypes } from 'react';
import classes from './SoloCheckbox.scss';
import GreenCheck from './GreenCheck.svg';
import classNames from '../../helpers/ClassNames';
import Isvg from 'react-inlinesvg';

const labelCls = (props) => classNames({
  [classes.CheckboxLabel]: true,
  [props.className]: !!props.className
});

const hideShowCheck = (props) => classNames({
  [classes.CheckMark]: true,
  [classes.CheckMarkChecked]: props.isSelected
});

const checkboxChange = (props) => (e) => {
  props.onSelect({
    field: props.id,
    checked: e.target.checked,
    value: props.value
  });
};

const Checkbox = (props) => (
  <label className={labelCls(props)} htmlFor={props.id} data-hook="solo-checkbox">
    <input
      className={classes.CheckboxInput}
      type="checkbox"
      id={props.id}
      onChange={checkboxChange(props)}
      checked={props.isSelected}
    />

    <div className={hideShowCheck(props)} data-hook="check-mark">
      <Isvg src={GreenCheck} className={classes.svgWrapper} />
    </div>

    {props.children || props.label}
  </label>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Checkbox;
