import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './ConfirmBox.scss';
import closeImage from './close.png';
import Button from '../Button';
class ConfirmBox extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className={classes.ModalOverlay} />
                <div className={classes.Modal}>
                    <div className={classes.ModalBody}>
                        {this.props.children}
                        <br />
                        <div className={classes.ModalButtons}>
                            <div className={classes.ModalButton}>
                                <Button label="Yes" size="normal" theme="primary" onClick={this.props.onYes} />
                            </div>
                            <div className={classes.ModalButton}>
                                <Button label="No" size="normal" theme="dark" onClick={this.props.onNo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ConfirmBox.propTypes = {
    children: PropTypes.node,
    onNo: PropTypes.func,
    onYes: PropTypes.func
};

export default ConfirmBox;