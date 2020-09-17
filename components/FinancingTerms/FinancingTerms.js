import PropTypes from 'prop-types';
import React, { Component } from 'react';
import formatCurrency from '../../helpers/FormatCurrency';
import addCommasForThousands from '../../helpers/AddCommasForThousands';
import classes from './FinancingTerms.scss';

class FinancingTerms extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isSelected: false,
      isLeasingOffer: false
    };
  }

  componentWillMount () {
    if (this.props.isSelected) {
      this.setState({
        isSelected: true
      });
    } else {
      this.setState({
        isSelected: false
      });
    }

    if (this.props.readOnly) {
      this.setState({
        readOnly: true
      });
    } else {
      this.setState({
        readOnly: false
      });
    }

    if (this.props.mileage && this.props.mileage !== null && this.props.mileage !== '') {
      this.setState({ isLeadingOffer: true });
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isSelected !== this.props.isSelected) {
      if (nextProps.isSelected) {
        this.setState({
          isSelected: true
        });
      } else {
        this.setState({
          isSelected: false
        });
      }
    }

    if (nextProps.readOnly !== this.props.readOnly) {
      if (nextProps.readOnly) {
        this.setState({
          readOnly: true
        });
      } else {
        this.setState({
          readOnly: false
        });
      }
    }
  }

  toggleSelectVehicle = () => {
    if (!this.props.readOnly) {
      if (this.state.isSelected === false) {
        this.setState({ isSelected: true });
        this.props.toggleSelect(true, this.props);
      } else {
        this.setState({ isSelected: false });
        this.props.toggleSelect(false, this.props);
      }
    }
  }

  render () {
    const classNames = ['FinancingTerms', (this.state.isSelected === true ? 'selected' : ''), (this.props.readOnly === true ? 'readOnly' : '')];

    return (
      <div className={classNames.map((c) => classes[c] || c).join(' ')} onClick={this.toggleSelectVehicle}>
        <div className={`${classes.flex__row} ${classes.flex__row}`}>
          <div className={`${classes.flex__row__item} ${classes.item} ${classes.monthlyPay}`}>
            <div>Monthly Payment</div>
            <div>{formatCurrency(this.props.monthlyPay)}</div>
          </div>

          <div className={`${classes.flex__row__item} ${classes.item}`} hidden={this.state.isLeadingOffer}>
            <div>APR</div>
            <div>{this.props.apr}%</div>
          </div>

          <div className={`${classes.flex__row__item} ${classes.item}`}>
            <div>Terms</div>
            <div>{this.props.terms} Months</div>
          </div>

          <div className={`${classes.flex__row__item} ${classes.item}`} hidden={!this.state.isLeadingOffer}>
            <div>Annual Mileage</div>
            <div>{this.props.mileage ? addCommasForThousands(this.props.mileage) : ''}</div>
          </div>
        </div>
      </div>
    );
  }
}

FinancingTerms.propTypes = {
  isSelected: PropTypes.bool,
  programId: PropTypes.string,
  monthlyPay: PropTypes.string, // this is causing errors
  apr: PropTypes.string, // this is causing errors
  terms: PropTypes.string, // this is causing errors
  mileage: PropTypes.string, // TODO: need to format this number with commas
  toggleSelect: PropTypes.func,
  readOnly: PropTypes.bool,
  downPayment: PropTypes.string
};

export default FinancingTerms;