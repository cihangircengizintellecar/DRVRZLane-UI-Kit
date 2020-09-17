import React, { PropTypes } from 'react';
import Table from '../TableElements/Table';
import Row from '../TableElements/Row';
import Column from '../TableElements/Column';
import DealSummaryOfferRow from './DealSummaryOfferRow/DealSummaryOfferRow';
import formatCurrency from '../../helpers/FormatCurrency';
import addCommasForThousands from '../../helpers/AddCommasForThousands';

import classes from './DealSummary.scss';

const DealSummary = function (props) {
  const formattedTotal = formatCurrency(props.total);
  let addOnsWithValues = [];
  let addOnsWithoutValues = [];

  if (props.warrantiesAndAddons && props.warrantiesAndAddons.length > 0) {
    addOnsWithValues = props.warrantiesAndAddons.filter((w) => {
      return typeof w.price !== 'undefined';
    });
    addOnsWithoutValues = props.warrantiesAndAddons.filter((w) => {
      return typeof w.price === 'undefined';
    });
  }

  const tableClassNames = ['purchaseDetails', props.isLeasing && !props.total ? 'isLeasing' : '', !props.isLeasing && !props.total ? 'isFinancing' : '', !props.isLeasing && props.total ? 'isPayingCash' : ''];

  const percentSign = '%';
  const monthsLabel = ' Months';
  const milesLabel = ' Miles';
  const comma = ', ';

  const downPayment = props.downPayment === 0 ? '0' : props.downPayment;
  const apr = (props.apr ? props.apr.toString().concat(percentSign) : '');
  const mileage = (props.mileage ? props.mileage.toString().concat(milesLabel) : '');
  const terms = (props.terms ? props.terms.toString().concat(monthsLabel) : '');

  const monthlyPaymentDetails = (apr !== '' && terms !== '') ? apr.concat(comma) + terms : mileage.concat(comma) + terms;

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.flexRow}>
          <div className={`${classes.flexRowItem} ${classes.hideOnMobile}`}>
            <img src={props.manufacturerLogo} className={classes.manufacturerLogo} />
          </div>
          <div className={classes.flexRowItem}>
            <div className={classes.carName}>{props.carName}</div>
            <div className={classes.carColor}>{props.carColor}</div>
            <div className={classes.carVin}>{props.vin}</div>
          </div>
        </div>
      </div>

      {/*{(downPayment && props.totalMonthlyPayment && (props.apr !== null || props.mileage) && props.terms) &&
        <div className={classes.PurchaseInfoFinancingTerms}>
          <div className={classes.PurchaseInfoFlexRowItem}>
            <span>Down</span>
            <span>{formatCurrency(downPayment)}</span>
          </div>
          <div className={classes.PurchaseInfoFlexRowItem}>
            <span>Monthly</span>
            <span>{formatCurrency(props.totalMonthlyPayment)}</span>
          </div>
          <div className={classes.PurchaseInfoFlexRowItem} hidden={props.isLeasing}>
            <span>APR</span>
            <span>{props.apr}%</span>
          </div>
          <div className={classes.PurchaseInfoFlexRowItem}>
            <span>Terms</span>
            <span>{props.terms} Mo.</span>
          </div>
          <div className={classes.PurchaseInfoFlexRowItem} hidden={!props.isLeasing}>
            <span>Mileage</span>
            <span>{props.mileage ? addCommasForThousands(props.mileage) : ''}</span>
          </div>
        </div>
      }*/}

      <div className={classes.tablesWrapper}>
        <div className={tableClassNames.map((c) => classes[c]).join(' ')}>
          <Table>
            {props.msrp &&
              <DealSummaryOfferRow
                name="Price"
                value={props.msrp}
                positive
              />
            }

            {(props.extraFees && props.extraFees.length > 0) && props.extraFees.map((row, index) => (
              <DealSummaryOfferRow
                key={index}
                name={row.name}
                value={row.amount}
                positive
              />
            ))
            }

            {props.tradeInOffer &&
              <DealSummaryOfferRow
                name="Trade In Offer"
                value={props.tradeInOffer.value}
                requirements={props.tradeInOffer.requirements}
              />
            }
            {props.tradeInAmountOwed && (parseFloat(props.tradeInAmountOwed) > 0) &&
              <DealSummaryOfferRow
                name="Amount Owed"
                value={props.tradeInAmountOwed}
                positive
              />
            }

            {downPayment &&
              <DealSummaryOfferRow
                name="Down Payment"
                value={downPayment}
              />
            }

            {(props.offersAndIncentives && props.offersAndIncentives.length > 0) && props.offersAndIncentives.map((row, index) => (
              <DealSummaryOfferRow
                key={index}
                name={row.name}
                value={row.amount}
                requirements={row.requirements}
                infoType={row.infoType}
                onExpand={props.onExpand}
              />
            ))
            }

            {addOnsWithValues.length > 0 && addOnsWithValues.map((row, index) => (
              <DealSummaryOfferRow
                key={index}
                name={row.title}
                value={row.price}
                description={row.description}
                onExpand={props.onExpand}
                positive
              />
            ))
            }

            {props.tax &&
              <DealSummaryOfferRow
                name="Tax"
                value={props.tax}
                positive
              />
            }

            {!props.isLeasing && !props.total &&
              <Row>
                <Column>Total Loan Amount</Column>
                <Column>{props.totalLoanAmount ? formatCurrency(props.totalLoanAmount) : ''}</Column>
                <Column />
                <Column />
                <Column />
              </Row>
            }

            {!props.total &&
              <Row>
                <Column>Total Monthly Payment</Column>
                <Column>{props.totalMonthlyPayment ? formatCurrency(props.totalMonthlyPayment) : ''}</Column>
                <Column>{monthlyPaymentDetails}</Column>
                <Column />
                <Column />
              </Row>
            }

            {props.total &&
              <Row>
                <Column>Total</Column>
                <Column>{formattedTotal}</Column>
                <Column />
                <Column />
                <Column />
              </Row>
            }

          </Table>
        </div>

        {(!props.isLeasing && addOnsWithoutValues && addOnsWithoutValues.length > 0) &&
          <div className={classes.addOnsWithoutValuesTable}>
            <Table>
              <Row>
                <Column>You're Interested In:</Column>
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
              </Row>

              {(addOnsWithoutValues && addOnsWithoutValues.length > 0) && addOnsWithoutValues.map((row, index) => (
                <Row key={index}>
                  <Column>{row.title}</Column>
                  <Column><h2>Pending</h2></Column>
                  <Column />
                  <Column />
                  <Column />
                  <Column />
                </Row>
              ))
              }
            </Table>
          </div>
        }
      </div>
    </div>
  );
};

DealSummary.propTypes = {
  headerText: PropTypes.string,
  isLeasing: PropTypes.bool,
  manufacturerLogo: PropTypes.string,
  carName: PropTypes.string,
  carColor: PropTypes.string,
  vin: PropTypes.string,
  carCondition: PropTypes.string,
  code: PropTypes.string,
  msrp: PropTypes.string,
  tradeInOffer: PropTypes.shape({
    value: React.PropTypes.string,
    requirements: React.PropTypes.string
  }),
  tradeInAmountOwed: PropTypes.string,
  downPayment: PropTypes.string,
  leaseTerm: PropTypes.string,
  mileage: PropTypes.string,
  apr: PropTypes.string,
  terms: PropTypes.string,
  extraFees: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.string
  })),
  offersAndIncentives: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.string
  })),
  warrantiesAndAddons: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string
  })),
  tax: React.PropTypes.string,
  extendedWarranty: PropTypes.string,
  gapInsurance: PropTypes.string,
  total: PropTypes.string,
  totalMonthlyPayment: PropTypes.string,
  totalLoanAmount: PropTypes.string,
  onExpand: PropTypes.func.isRequired
};

export default DealSummary;
