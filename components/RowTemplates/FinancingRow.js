import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './OfferRow.scss';
import clEM from './OfferEMRow.scss';
import Row from '../TableElements/Row';
import Column from '../TableElements/Column';
import checkmarkImage from './checkmark.png';

class FinancingRow extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isSelected: this.props.isSelected || false,
      spread: this.props.spread
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isSelected !== this.props.isSelected) {
      this.setState({ isSelected: nextProps.isSelected });
    }
  }

  onSelectOfferRow = () => {
    if (this.state.isSelected) {
      this.setState({ isSelected: false });
      this.props.onSelect(false, this.props);
    } else {
      this.setState({ isSelected: true });
      this.props.onSelect(true, this.props);
    }
  };

  onChange = ({ field, val }) => {
    this.setState({ [field]: val });
    this.props.onChange({ field, val });
  }

  isValid = (spread) => {
    return !(spread.length <= 0);
  }

  render () {
    return (
      <Row>
        <Column>
          <div className={classes.OfferRowCheckboxWrapper}>
            <div>
              {this.state.isSelected ?
                <div className={classes.OfferRowCheckbox} onClick={this.onSelectOfferRow}>
                  <img src={checkmarkImage} />
                </div>
                :
                <div className={classes.OfferRowCheckbox} onClick={this.onSelectOfferRow} />
              }
            </div>
          </div>
        </Column>

        <Column>
          <div className={`${clEM.OfferEMName} ${classes.OfferName}`}>
            <h5 id="name">{this.props.name}</h5>
          </div>
        </Column>

      </Row>
    );
  }
}

FinancingRow.propTypes = {
  onSelect: PropTypes.func,
  name: PropTypes.string,
  spread: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func
};

export default FinancingRow;