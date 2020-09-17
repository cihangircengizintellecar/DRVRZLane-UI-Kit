import React, { PropTypes } from 'react';

import classes from './TradeInInformation.scss';

const TradeInInformation = function (props) {
  return (
    <div className={classes.wrapper}>
      <div className={`${classes.flex__row} ${classes.flex__row}`}>
        <div className={`${classes.flex__row__item} ${classes.flex__row__item} ${classes.offer}`}>

          <div className={`${classes.flex__row} ${classes.carSummary}`}>
            <div className={`${classes.flex__row__item} ${classes.manufacturerLogoWrapper}`}>
              <img src={props.manufacturerLogo} />
            </div>

            <div className={`${classes.flex__row__item} ${classes.carDetails}`}>
              <div className={classes.name}>{props.name}</div>
              <div className={classes.color} />
              <div className={classes.vin}><a onClick={props.onEditClick}>Click to Edit</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TradeInInformation.propTypes = {
  headerText: PropTypes.string,
  manufacturerLogo: PropTypes.string,
  name: PropTypes.string,
  carCondition: PropTypes.string,
  code: PropTypes.string,
  msrp: PropTypes.string,
  tradeInOffer: PropTypes.string,
  downPayment: PropTypes.string,
  monthlyPayment: PropTypes.string,
  leaseTerm: PropTypes.string,
  apr: PropTypes.string,
  onEditClick: PropTypes.func,
  offersAndIncentives: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.string
  })),
  warrantiesAndAddons: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string
  })),
  extendedWarranty: PropTypes.string,
  gapInsurance: PropTypes.string,
  total: PropTypes.string
};

export default TradeInInformation;
