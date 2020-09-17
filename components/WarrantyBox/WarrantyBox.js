import React, { Component } from 'react';
import classes from './WarrantyBox.scss';

class WarrantyBox extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isSelected: false,
      readOnly: false
    };
  }

  componentWillMount () {
    this.setState({
      isSelected: this.props.isSelected,
      readOnly: this.props.readOnly
    });
  }

  toggleSelectWarranty = () => {
    if (this.state.readOnly === false) {
      if (this.state.isSelected === false) {
        this.setState({ isSelected: true });
        this.props.toggleSelect(true);
      } else {
        this.setState({ isSelected: false });
        this.props.toggleSelect(false);
      }
    }
  }

  render () {
    const classNames = ['WarrantyBox', (this.state.isSelected === true ? 'selected' : ''), (this.state.readOnly === true ? 'readOnly' : '')];

    return (
      <div className={classNames.map((c) => classes[c] || c).join(' ')} onClick={this.toggleSelectWarranty}>
        <div className={classes.Header}>
          <div className={classes.Package}>Package {this.props.package}</div>
          <div className={classes.Name}>{this.props.name}</div>
        </div>

        <div className={classes.Content}>
          <div className={classes.Description}>{this.props.description}</div>
          <div className={classes.Value}>${this.props.value}</div>
        </div>
      </div>
    );
  }
}

WarrantyBox.propTypes = {
  package: React.PropTypes.string,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  value: React.PropTypes.string,
  isSelected: React.PropTypes.bool,
  readOnly: React.PropTypes.bool,
  toggleSelect: React.PropTypes.func
  // onExpand: React.PropTypes.func,
  // children: React.PropTypes.node
};

export default WarrantyBox;
