import React, { Component, PropTypes } from 'react';
import formatCurrency from '../../helpers/FormatCurrency';
import addCommasForThousands from '../../helpers/AddCommasForThousands';
import classes from './CombinedFinancingTerms.scss';

module.exports = ({
  monthlyPay,
  leasingMonthlyPay,
  terms,
  apr,
  mileage,
  isSelected
}) => {
  const classNames = ['FinancingTerms', (isSelected === true ? 'selected' : '')];

  return (
    <div className={classNames.map((c) => classes[c] || c).join(' ')}>
      <div className={`${classes.flex__row} ${classes.flex__row}`}>
        <div className={`${classes.flex__row__item} ${classes.item}`}>
          <div>Term</div>
          <div>{terms} Months</div>
        </div>

        <div className={`${classes.flex__row__item} ${classes.item} ${classes.monthlyPay}`}>
          <div>Monthly Payment</div>
          <div>{formatCurrency(monthlyPay)}</div>
        </div>

        <div className={`${classes.flex__row__item} ${classes.item}`}>
          <div>APR</div>
          <div>{apr}%</div>
        </div>

        <div className={`${classes.flex__row__item} ${classes.item}`}>
          <div>Annual Mileage</div>
          <div>{mileage ? addCommasForThousands(mileage) : ''}</div>
        </div>
      </div>
    </div>
  );
};
