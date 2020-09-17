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
  selection: React.PropTypes.string,
  onChange: React.PropTypes.func,
  toggleOptions: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  className: React.PropTypes.string,
  children: React.PropTypes.node
};

export default ToggleButton;
