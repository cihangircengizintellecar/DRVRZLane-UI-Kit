import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './MobileFooter.scss';
import arrowImage from './arrow.png';
import PurchaseLineItem from '../PurchaseLineItem';

class MobileFooter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      show: false
    };
  }

  click = () => {
    if (this.state.show === false) {
      this.setState({ show: true });
      if (this.props.onClick) { this.props.onClick(true); }
    } else {
      this.setState({ show: false });
      if (this.props.onClick) { this.props.onClick(false); }
    }
  };

  render () {
    const wrapperClasses = ['MobileFooter', (this.state.show === true ? 'shown' : 'hidden'), `${this.props.className}`];
    let addOnsWithValues = [];
    let addOnsWithoutValues = [];

    if (this.props.warrantiesAndAddons && this.props.warrantiesAndAddons.length > 0) {
      addOnsWithValues = this.props.warrantiesAndAddons.filter((w) => {
        return typeof w.price !== 'undefined';
      });
      addOnsWithoutValues = this.props.warrantiesAndAddons.filter((w) => {
        return typeof w.price === 'undefined';
      });
    }

    return (
      <div className={wrapperClasses.map((c) => classes[c] || c).join(' ')} onClick={this.click}>
        <div className={classes.dealSummary}>
          <h2>
            Purchase Summary
            <img src={arrowImage} className={this.state.show === true ? classes.open : ''} />
          </h2>
        </div>

        <div className={`${classes.flexRow} ${classes.carSummary}`}>
          <div className={`${classes.flexRowItem} ${classes.carDetails}`}>
            <div className={classes.carName}>{this.props.carToPurchase.name}</div>
            <div className={classes.carColor}>{this.props.carToPurchase.color}</div>
            <div className={classes.carVin}>{this.props.carToPurchase.vin}</div>
          </div>
        </div>

        <div className={classes.purchaseDetails}>
          {this.props.msrp &&
            <PurchaseLineItem
              name="Price"
              value={this.props.msrp}
              positive
            />
          }

          {this.props.downPayment &&
            <PurchaseLineItem
              name="Down Payment"
              value={this.props.downPayment}
            />
          }

          {this.props.tradeInOffer &&
            <PurchaseLineItem
              name="Trade In Offer"
              value={this.props.tradeInOffer}
            />
          }
          
          {this.props.tradeInAmountOwed && (parseFloat(this.props.tradeInAmountOwed) > 0) &&
            <PurchaseLineItem
              name="Amount Owed"
              value={this.props.tradeInAmountOwed}
              positive
            />
          }

          {addOnsWithValues.length > 0 && addOnsWithValues.map((row, index) => (
            <PurchaseLineItem
              key={index}
              name={row.title}
              value={row.price}
              positive
            />
          ))
          }

          {(this.props.offersAndIncentives && this.props.offersAndIncentives.length > 0) && this.props.offersAndIncentives.map((row, index) => (
            <PurchaseLineItem
              key={index}
              name={row.name}
              value={row.amount}
              infoType={row.infoType}
            />
          ))
          }

          {(this.props.extraFees && this.props.extraFees.length > 0) && this.props.extraFees.map((row, index) => (
            <PurchaseLineItem
              key={index}
              name={row.name}
              value={row.amount}
              positive
            />
          ))
          }

          {this.props.tax &&
            <PurchaseLineItem
              name="Tax"
              value={this.props.tax}
              positive
            />
          }

          {this.props.total &&
            <PurchaseLineItem
              name="Total*"
              value={this.props.total}
              positive
            />
          }

          {(addOnsWithoutValues && addOnsWithoutValues.length > 0) &&
            <div className={classes.addOnHeader}>Selected Optional Add-Ons:</div>
          }

          {(addOnsWithoutValues && addOnsWithoutValues.length > 0) && addOnsWithoutValues.map((row, index) => (
            <PurchaseLineItem
              key={index}
              name={row.title}
              value="Pending"
            />
          ))
          }
        </div>
        <div className={classes.finePrintSection}>*Subject to change upon dealer inspection.</div>
      </div>
    );
  }
}

MobileFooter.propTypes = {
  className: PropTypes.string,
  dealerLogo: PropTypes.string,
  msrp: PropTypes.string,
  downPayment: PropTypes.string,
  warrantiesAndAddons: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string
  })),
  offersAndIncentives: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.string
  })),
  extraFees: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.string
  })),
  tradeInOffer: PropTypes.string,
  tradeInAmountOwed: PropTypes.string,
  total: PropTypes.string,
  onClick: PropTypes.func,
  carToPurchase: PropTypes.shape({
    manufacturerLogo: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    vin: PropTypes.string,
    condition: PropTypes.string
  }),
  carToTradeIn: PropTypes.shape({
    manufacturerLogo: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    vin: PropTypes.string,
    condition: PropTypes.string
  }),
  tax: PropTypes.string,
  children: PropTypes.node
};

export default MobileFooter;