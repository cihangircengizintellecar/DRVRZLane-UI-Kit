import React, { PropTypes } from 'react';
import PurchaseLineItem from '../PurchaseLineItem';
import formatCurrency from '../../helpers/FormatCurrency';
import addCommasForThousands from '../../helpers/AddCommasForThousands';
import classes from './PurchaseInformation.scss';

// TODO: still need to add "Total Loan Amount" or "Total Monthly Payment" when a retail or lease financing offer is chosen

const PurchaseInformation = function (props) {
  let addOnsWithValues = [];
  let addOnsWithoutValues = [];
  const isLeasing = (props.mileage && props.mileage !== null && props.mileage !== '') ? true : false;

  if (props.warrantiesAndAddons && props.warrantiesAndAddons.length > 0) {
    addOnsWithValues = props.warrantiesAndAddons.filter((w) => {
      return typeof w.price !== 'undefined' && w.price !== null;
    });
    addOnsWithoutValues = props.warrantiesAndAddons.filter((w) => {
      const wtf = typeof w.price === 'undefined' || w.price === null;
      return wtf;
    });
  }

  const downPayment = props.downPayment === 0 ? '0' : props.downPayment;

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2 className={classes.headerText}>{props.headerText}</h2>
      </div>

      <div className={classes.PurchaseInfoFlexRow}>
        <div className={`${classes.PurchaseInfoFlexRowItem} ${classes.offer}`}>

          <div className={`${classes.PurchaseInfoFlexRow} ${classes.carSummary}`}>
            <div className={`${classes.PurchaseInfoFlexRowItem} ${classes.manufacturerLogoWrapper}`}>
              <img src={props.manufacturerLogo} />
            </div>

            <div className={`${classes.PurchaseInfoFlexRowItem} ${classes.carDetails}`}>
              <div className={classes.carName}>{props.carName}</div>
              <div className={classes.carColor}>{props.carColor}</div>
              <div className={classes.carVin}>{props.vin}</div>
            </div>
          </div>

          {(downPayment && props.monthlyPayment && (props.apr !== null || props.mileage) && props.terms) &&
            <div className={classes.PurchaseInfoFinancingTerms}>
              <div className={classes.PurchaseInfoFlexRowItem}>
                <span>Down</span>
                <span>{formatCurrency(downPayment)}</span>
              </div>
              <div className={classes.PurchaseInfoFlexRowItem}>
                <span>Monthly</span>
                <span>{formatCurrency(props.monthlyPayment)}</span>
              </div>
              <div className={classes.PurchaseInfoFlexRowItem} hidden={isLeasing}>
                <span>APR</span>
                <span>{props.apr}%</span>
              </div>
              <div className={classes.PurchaseInfoFlexRowItem}>
                <span>Terms</span>
                <span>{props.terms} Mo.</span>
              </div>
              <div className={classes.PurchaseInfoFlexRowItem} hidden={!isLeasing}>
                <span>Mileage</span>
                <span>{props.mileage ? addCommasForThousands(props.mileage) : ''}</span>
              </div>
            </div>
          }

          <div className={classes.lineItems}>
            {props.msrp &&
              <PurchaseLineItem
                name="Price"
                value={props.msrp}
                positive
              />
            }

            {downPayment &&
              <PurchaseLineItem
                name="Down Payment"
                value={downPayment}
              />
            }

            {props.tradeInOffer &&
              <PurchaseLineItem
                name="Trade In Offer"
                value={props.tradeInOffer}
              />
            }

            {props.tradeInAmountOwed && (parseFloat(props.tradeInAmountOwed) > 0) &&
              <PurchaseLineItem
                name="Amount Owed"
                value={props.tradeInAmountOwed}
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

            {(props.offersAndIncentives && props.offersAndIncentives.length > 0) && props.offersAndIncentives.map((row, index) => (
              <PurchaseLineItem
                key={index}
                name={row.name}
                value={row.amount}
                infoType={row.infoType}
              />
            ))
            }

            {(props.extraFees && props.extraFees.length > 0) && props.extraFees.map((row, index) => (
              <PurchaseLineItem
                key={index}
                name={row.name}
                value={row.amount}
                positive
              />
            ))
            }

            {props.tax ?
              <PurchaseLineItem
                name="Tax"
                value={props.tax}
                positive
              /> : null
            }

            {props.total &&
              <PurchaseLineItem
                name="Total*"
                value={props.total}
                positive
              />
            }

            {!props.leasingVehicle && props.totalLoanAmount &&
              <PurchaseLineItem
                name="Total Loan Amount*"
                value={props.totalLoanAmount}
                positive
              />
            }

            {props.leasingVehicle && props.totalMonthlyPayment &&
              <PurchaseLineItem
                name="Total Monthly Payment*"
                value={props.totalMonthlyPayment}
                positive
              />
            }

            {(addOnsWithoutValues && addOnsWithoutValues.length > 0) &&
              <div className={classes.addOnHeader}>You're Interested In:</div>
            }

            {(props.warrantiesAndAddons && addOnsWithoutValues.length > 0) && addOnsWithoutValues.map((row, index) => (
              <PurchaseLineItem
                key={index}
                name={row.title}
                value="Pending"
              />
            ))
            }
          </div>
        </div>
      </div>
      <div className={classes.finePrintSection}>*Subject to change upon dealer inspection.</div>
    </div>
  );
};

PurchaseInformation.propTypes = {
  headerText: PropTypes.string,
  manufacturerLogo: PropTypes.string,
  carName: PropTypes.string,
  carColor: PropTypes.string,
  vin: PropTypes.string,
  msrp: PropTypes.string,
  tradeInOffer: PropTypes.string,
  tradeInAmountOwed: PropTypes.string,
  downPayment: PropTypes.string,
  monthlyPayment: PropTypes.string,
  terms: PropTypes.string,
  apr: PropTypes.string,
  mileage: PropTypes.string,
  extraFees: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.string
  })),
  offersAndIncentives: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.string
  })),
  warrantiesAndAddons: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.string
  })),
  extendedWarranty: PropTypes.string,
  gapInsurance: PropTypes.string,
  leasingVehicle: PropTypes.bool,
  totalLoanAmount: PropTypes.string,
  totalMonthlyPayment: PropTypes.string,
  tax: PropTypes.string,
  total: PropTypes.string
};

export default PurchaseInformation;
