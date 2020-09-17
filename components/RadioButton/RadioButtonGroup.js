import PropTypes from 'prop-types';
import React, { Component } from 'react';
import RadioButton from './RadioButton';
import classes from './RadioButtonGroup.scss';

class RadioButtonGroup extends Component {
  handleOptionChange = (value) => (e) => {
    e.persist();

    this.props.onChange(e, value);
  }

  computeSelectedValue (curValue) {
    return curValue === this.props.selectedValue;
  }

  render () {
    const radioButtons = this.props.options.map((opt, i) => {
      const hasStringValues = !opt.displayValue;

      if (hasStringValues) {
        return (
          <RadioButton
            key={i}
            large={this.props.large}
            value={opt}
            label={opt}
            recordField={this.props.recordField}
            checked={this.computeSelectedValue(opt)}
            onChange={this.handleOptionChange(opt)}
          />
        );
      }

      return (
        <RadioButton
          key={i}
          large={this.props.large}
          displayValue={opt.displayValue}
          value={opt.value}
          label={opt.displayValue}
          recordField={this.props.recordField}
          checked={this.computeSelectedValue(opt.value)}
          tabIndex={opt.tabIndex}
          onChange={this.handleOptionChange(opt.value)}
        />
      );
    });

    return (
      <fieldset className={`${classes.RadioButtonGroup} ${this.props.className}`} id={this.props.recordField}>
        {radioButtons}
      </fieldset>
    );
  }
}

RadioButtonGroup.propTypes = {
  recordField: PropTypes.string,
  onChange: PropTypes.func,
  large: PropTypes.bool,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({})
  ]),
  options: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.shape({
      displayValue: PropTypes.string,
      value: PropTypes.string,
      tabIndex: PropTypes.string
    })
  ]),
  className: PropTypes.string
};

export default RadioButtonGroup;