import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './Input.scss';

const trimWhitespace = (string = '') => {
  if (typeof string === 'string') {
    return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  } else if (string !== null) {
    return string.toString().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
  return string;
};

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirty: false,
      isActive: false,
      isValid: false
    };
  }

  componentWillMount() {
    this.checkActive(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkActive(nextProps);
  }

  checkActive = (props) => {
    if (props.value && !this.state.isActive) {
      this.toggleActive('active');
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
    return this.setState({ isValid: this.props.validateFunction(newVal) });
  };

  inputBlur = (event) => {
    const newVal = event.target.value;

    this.toggleDirty('clean');

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    if (!this.props.value) {
      this.toggleActive('inactive');
    }

    this.props.onChange({
      field: this.props.inputAttrs.name,
      value: trimWhitespace(this.props.value)
    });

    this.props.validateFunction(newVal);
  };

  inputFocus = (event) => {
    if (!this.props.value) {
      this.toggleActive('active');
    }

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  inputOnKeyPress = (event) => {
    if (this.props.inputAttrs.type == 'number') {
      event = event || window.event;
      var charCode = (typeof event.which == "undefined") ? event.keyCode : event.which;
      var charStr = String.fromCharCode(charCode);

      if (!charStr.match(/^[0-9]+$/) && !(this.props.isDecimal === true && charStr == '.')) {
        event.preventDefault();
      }
    }
  }

  inputOnKeyUp = (event) => {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  };

  inputChange = (event) => {
    const newVal = event.target.value;

    this.toggleDirty('dirty');
    const valid = this.validate(newVal);

    this.props.onChange({
      field: this.props.inputAttrs.name,
      value: newVal,
      valid
    });
  };

  render() {
    const {
      inputAttrs = {},
      validationErrors = []
    } = this.props;
    const InputType = (this.props.size === 'large' ? 'textarea' : 'input');
    const hasValidationButNotDirty = validationErrors.length !== 0 && !this.state.isDirty;
    const classNames = ['wrapper', `${this.props.theme}`, `size__${this.props.size}`, (hasValidationButNotDirty ? 'error' : '')];

    return (
      <div className={classNames.map((c) => classes[c]).join(' ')}>
        {this.props.label &&
          <label className={classes.label}>{this.props.label}</label>}

        {this.props.readOnly === true ?
          <div>
            {this.props.value}
          </div>
          :
          <div>
            <InputType
              placeholder={this.props.placeholder}
              className={classes.input}
              value={this.props.value}
              disabled={this.props.disabled}
              onChange={this.inputChange}
              onBlur={this.inputBlur}
              onFocus={this.inputFocus}
              onKeyUp={this.inputOnKeyUp}
              onKeyDown={this.inputOnKeyDown}
              onClick={this.inputOnClick}
              onKeyPress={this.inputOnKeyPress}
              {...inputAttrs}
            />
            {hasValidationButNotDirty &&
              <div className={classes.errorMessage}>{this.props.validationErrors[0]}</div>}
          </div>
        }
      </div>
    );
  }
}

Input.propTypes = {
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
  inputAttrs: PropTypes.shape({
    name: PropTypes.string    
  }),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func,
  validationErrors: PropTypes.arrayOf(PropTypes.string),
  validateFunction: PropTypes.func.isRequired,
  children: PropTypes.node,
  isDecimal: PropTypes.bool
};

export default Input;