import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './ToggleButton.scss';

class ToggleButton extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selection: props.selection || props.toggleOptions[0]
    };
  }

  onClick = (event) => {
    this.setState({ selection: event.target.value });
    this.props.onChange(event.target.value);
  }

  render () {
    const classNames = ['ToggleButton'];
    if (this.props.className) {
      classNames.push(this.props.className);
    }

    const buttons = [];
    this.props.toggleOptions.map((opt, i) => {
      buttons.push(<button key={i} className={this.state.selection === opt ? `${classes.selected}` : ''} value={opt} onClick={this.onClick}>{opt}</button>);
    });

    return (
      <div className={classes.ToggleButton}>
        {buttons}
      </div>
    );
  }
}

ToggleButton.propTypes = {
  selection: PropTypes.string,
  onChange: PropTypes.func,
  toggleOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default ToggleButton;