import React, { Component } from 'react';
import classes from './ModalPopover.scss';
import closeImage from './close.png';

class ModalPopover extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isDirty: false,
      isActive: false,
      isValid: false
    };
  }

  componentDidMount () {
    if (this.props.isSelfClosing) {
      this.timeout = window.setTimeout(this.props.clickClose, 3000);
    }
  }

  componentWillUnmount () {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }

  render () {
    return (
      <div>
        <div className={classes.ModalOverlay} onClick={this.props.clickClose} />

        <div className={classes.Modal}>
          {(!this.props.isSelfClosing && !this.props.hideCloseButton && <button className={classes.ModalClose} onClick={this.props.clickClose}>
            <img src={closeImage} />
          </button>)}
          <div className={classes.ModalBody}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

ModalPopover.propTypes = {
  clickClose: React.PropTypes.func,
  children: React.PropTypes.node,
  isSelfClosing: React.PropTypes.bool,
  hideCloseButton: React.PropTypes.bool
};

export default ModalPopover;
