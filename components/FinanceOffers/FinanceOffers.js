import React, { Component, PropTypes } from 'react';
import formatCurrency from '../../helpers/FormatCurrency';
import addCommasForThousands from '../../helpers/AddCommasForThousands';
import classes from './FinanceOffers.scss';

const ingestOffers = (retailOffers, leasingOffers) => {
  const offersByTerm = {};
  retailOffers.forEach((offer) => {
    if (!offersByTerm[+offer.term]) {
      offersByTerm[+offer.term] = {};
    }

    offersByTerm[+offer.term].retail = offer;
  });

  leasingOffers.forEach((offer) => {
    if (!offersByTerm[+offer.term]) {
      offersByTerm[+offer.term] = {};
    }

    offersByTerm[offer.term].lease = offer;
  });

  const sortedOffers = Object.keys(offersByTerm).sort().reverse().map((term) => {
    return offersByTerm[term];
  });

  const totalOffers = retailOffers + leasingOffers;

  return () => ({
    offersByTerm,
    totalOffers,
    sortedOffers
  });
};

class FinanceOffers extends Component {
  constructor (props) {
    super(props);

    this.state = {
      termSelected: 12,
      offersByTerm: [],
      totalOffers: 0,
      sortedOffers: []
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.leasingOffers.length + nextProps.retailOffers.length !== this.state.totalOffers) {
      this.setState(ingestOffers(nextProps.retailOffers, nextProps.leasingOffers));
    }
  }

  selectTerm = (term) => {
    this.setState(() => ({
      termSelected: term
    }));
  }

  isValid = () => {
    return true;
  }

  render () {
    return (
      <div className={classes.OfferTable}>
        <div className={`${classes.OfferTableRow} ${classes.OfferTableRowHeader}`}>
          <div className={classes.termsColumn}>Months</div>
          <div className={`${classes.financingColumn} ${this.props.leasingOffers.length > 0 ? null : classes.wideColumn}`}>Financing</div>
          {this.props.leasingOffers.length > 0 && <div className={classes.leasingColumn}>Leasing</div>}
        </div>

        {this.state.sortedOffers.length > 0 && this.state.sortedOffers.map((offer) => <div className={classes.OfferTableRow}>
          <div className={`${classes.termsColumn} ${classes.term}`}>{offer.retail.term}</div>
          <div className={`${classes.financingColumn} ${offer.lease ? null : classes.wideColumn}`}>
            <div className={`${classes.OfferButton} ${offer.retail.isSelected ? classes.OfferSelected : ''}`} onClick={this.props.selectOffer(offer.retail)}>
              <div className={classes.Price}><span className={classes.PriceNumber}>{formatCurrency(addCommasForThousands(offer.retail.monthlyPayment))}</span><span className={classes.perMonth}> / month*</span></div>
              <div className={classes.Disclaimer}>* Calculated with {offer.retail.apr}% APR</div>
            </div>
          </div>
          {offer.lease && <div className={classes.leasingColumn}>
            <div className={`${classes.OfferButton} ${offer.lease && offer.lease.isSelected ? classes.OfferSelected : ''}`} onClick={this.props.selectOffer(offer.lease)}>
              <div className={classes.Price}><span className={classes.PriceNumber}>{formatCurrency(addCommasForThousands(offer.lease.monthlyPayment))}</span><span className={classes.perMonth}> / month*</span></div>
            </div>
          </div>}
        </div>)}
      </div>
    );
  }
}

export default FinanceOffers;
