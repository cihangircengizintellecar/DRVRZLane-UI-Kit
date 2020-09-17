import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './Dropdown.scss';

function isString (value) {
  return typeof value === 'string';
}

export class Dropdown extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isDirty: false,
      isActive: false,
      isValid: false
    };
  }

  dropdownChange = (event) => {
    let valForValidate;

    this.dropdownBlur();

    if (event.target.value !== '') {
      const value = this.props.options.find((opt) => {
        if (isString(opt)) {
          return opt === event.target.value;
        }
        return (opt.value).toString() === event.target.value;
      });

      if (isString(value)) {
        valForValidate = value;
      } else {
        valForValidate = value.value;
      }

      this.toggleDirty('dirty');
      this.validate(valForValidate);

      this.props.onChange({
        field: this.props.dropdownAttrs.name,
        value
      });
    } else {
      this.props.onChange({
        field: this.props.dropdownAttrs.name,
        value: null
      });
    }
  };

  dropdownBlur = (event) => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  toggleActive = (active) => {
    if (active === 'active') {
      this.setState({ isActive: true });
    } else {
      this.setState({ isActive: false });
    }
  };

  toggleDirty = (dirty) => {
    if (dirty === 'dirty') {
      this.setState({ isDirty: true });
    } else {
      this.setState({ isDirty: false });
    }
  };

  validate = (newVal) => {
    const isValid = this.props.validateFunction(newVal);

    return this.setState({ isValid });
  };

  computeValue = () => {
    const valExists = this.props.selectedValue !== null && this.props.selectedValue !== undefined;

    if (valExists && isString(this.props.selectedValue)) {
      return this.props.selectedValue;
    } else if (valExists) {
      return this.props.selectedValue[this.props.optionLabel];
    }

    return null;
  };

  render () {
    const errors = this.props.validationErrors;
    const hasValidationButNotDirty = errors.length !== 0 && !this.state.isDirty;
    const classNames = ['wrapper', `${this.props.theme}`, (hasValidationButNotDirty ? 'error' : '')];

    return (
      <div className={classNames.map((c) => classes[c]).join(' ')}>
        {this.props.label &&
          <label className={classes.label}>{this.props.label}</label>}
        <select
          className={classes.Dropdown}
          id={this.props.recordField}
          onChange={this.dropdownChange}
          onBlur={this.dropdownBlur}
          onFocus={this.props.onFocus}
          value={this.props.selectedValue}
          {...this.props.dropdownAttrs}
        >

          {!this.props.noDefaultOption &&
            <option value="">{this.props.placeholder || this.props.label}</option>
          }
          {this.props.options.map((option, i) =>
            <option key={i} value={option.value || option}>{option.label || option}</option>)}

        </select>
        {hasValidationButNotDirty &&
          <div className={classes.errorMessage}>{this.props.validationErrors}</div>}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  validationErrors: []
};

Dropdown.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  recordField: PropTypes.string,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  validateFunction: PropTypes.func,
  theme: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string
  ])),
  optionLabel: PropTypes.string,
  validationErrors: PropTypes.shape({}),
  dropdownAttrs: PropTypes.shape({
    name: PropTypes.string
  }),
  noDefaultOption: PropTypes.bool
};

export default Dropdown;