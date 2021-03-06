import PropTypes from 'prop-types';
import React, { Component } from 'react';
import InputElement from 'react-input-mask';
import classes from './MaskedInput.scss';

const trimWhitespace = (string = '') => {
  if (typeof string === 'string') {
    return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  } else if (string !== null) {
    return string.toString().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
  return string;
};

class MaskedInput extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isDirty: false,
      isActive: false,
      isValid: false,
      value: ''
    };
  }

  componentWillMount () {
    this.checkActive(this.props);
  }

  componentDidMount () {
    this.setState({
      value: this.props.value
    });
  }

  componentWillReceiveProps (nextProps) {
    this.checkActive(nextProps);
    if (this.state.value === '' && nextProps.value !== '') {
      this.setState({
        value: nextProps.value
      });
    }
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
    const newVal = this.sanitizeValue(event.target.value);

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

  inputOnKeyUp = (event) => {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  };

  sanitizeValue = (value) => {
    const captureRegex = this.props.acceptableValueCharacters;
    let trueValue = '';
    let match;

    while (match = captureRegex.exec(value)) {
      trueValue += match[0];
    }
    return trueValue;
  };

  inputChange = (event) => {
    this.setState({
      value: event.target.value
    });
    const newVal = this.sanitizeValue(event.target.value);

    if (newVal !== this.props.value) {
      this.toggleDirty('dirty');
      const valid = this.validate(newVal);

      this.props.onChange({
        field: this.props.inputAttrs.name,
        value: newVal,
        valid
      });
    }
  };

  render () {
    const {
      inputAttrs = {},
      validationErrors = []
    } = this.props;
    const hasValidationButNotDirty = validationErrors.length !== 0 && !this.state.isDirty;
    const classNames = ['wrapper', `${this.props.theme}`, `size__${this.props.size}`, (hasValidationButNotDirty ? 'error' : '')];
    const inputProps = {
      placeholder: this.props.placeholder,
      className: classes.input,
      value: this.state.value,
      disabled: this.props.disabled,
      onChange: this.inputChange,
      onBlur: this.inputBlur,
      onFocus: this.inputFocus,
      onKeyUp: this.inputOnKeyUp,
      onKeyDown: this.inputOnKeyDown,
      mask: this.props.mask,
      maskChar: this.props.maskChar,
      ...inputAttrs
    };

    return (
      <div className={classNames.map((c) => classes[c]).join(' ')}>
        {this.props.label &&
          <label className={classes.label}>{this.props.label}</label>}

        {this.props.readOnly === true ?
          <div>
            {this.state.value}
          </div>
          :
          <div>
            <InputElement
              {...inputProps}
            />
            {hasValidationButNotDirty &&
              <div className={classes.errorMessage}>{this.props.validationErrors[0]}</div>}
          </div>
        }
      </div>
    );
  }
}

MaskedInput.propTypes = {
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
  validationErrors: PropTypes.arrayOf(PropTypes.string),
  validateFunction: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default MaskedInput;