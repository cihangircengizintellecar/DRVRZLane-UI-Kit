import React, { PropTypes } from 'react';
import LineItem from './LineItem/LineItem';

import classes from './FinancingInformation.scss';

const FinancingInformation = function (props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2 className={classes.headerText}>{props.headerText}</h2>
      </div>

      <div className={`${classes.flex__row} ${classes.flex__row}`}>
        <div className={`${classes.flex__row__item} ${classes.flex__row__item} ${classes.offer}`}>
          <div className={classes.lineItems}>
            {props.downPayment &&
              <LineItem
                name="Down Payment"
                value={props.downPayment}
              />
            }

            {props.monthlyPayment &&
              <LineItem
                name="Monthly Payment"
                value={props.monthlyPayment}
              />
            }

            {props.leaseTerm &&
              <LineItem
                name="Lease Term"
                value={props.leaseTerm}
              />
            }

            {props.apr &&
              <LineItem
                name="APR"
                value={props.apr}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

FinancingInformation.propTypes = {
  headerText: PropTypes.string,
  downPayment: PropTypes.string,
  monthlyPayment: PropTypes.string,
  leaseTerm: PropTypes.string,
  apr: PropTypes.string
};

export default FinancingInformation;
