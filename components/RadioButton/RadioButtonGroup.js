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
  recordField: React.PropTypes.string,
  onChange: React.PropTypes.func,
  large: React.PropTypes.bool,
  selectedValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.shape({})
  ]),
  options: React.PropTypes.arrayOf([
    React.PropTypes.string,
    React.PropTypes.shape({
      displayValue: React.PropTypes.string,
      value: React.PropTypes.string,
      tabIndex: React.PropTypes.string
    })
  ]),
  className: React.PropTypes.string
};

export default RadioButtonGroup;
