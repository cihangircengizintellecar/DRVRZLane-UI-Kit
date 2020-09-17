import PropTypes from 'prop-types';
import React from 'react';
import Slider from '../Slider';
import formatCurrency from '../../helpers/FormatCurrency';

import cls from './LeasingPaymentCalculator.scss';

LeasingPaymentCalculator.propTypes = {
  downPayment: PropTypes.number,
  term: PropTypes.number,
  actualDownPayment: PropTypes.number,
  mileage: PropTypes.number,
  msrp: PropTypes.number.isRequired,
  moneyFactor: PropTypes.number,
  fees: PropTypes.arrayOf(PropTypes.shape({})),
  tradeIn: PropTypes.number,
  rebates: PropTypes.arrayOf(PropTypes.shape({})),
  taxRate: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

const staticResidualValues = {
  '10': 0.60,
  '12.5': 0.53,
  '15': 0.45
};

const calculateMonthlyPayment = (msrp, moneyFactor, term, miles, totalFees, downPayment, tradeIn, taxRate, totalRebates) => {
  const residualPercentage = staticResidualValues[miles];
  const residualValue = (msrp * residualPercentage);
  const adjustedCapitalizedCost = (msrp + totalFees) - (downPayment + tradeIn + totalRebates);
  const payment = (((adjustedCapitalizedCost - residualValue) / term) + ((adjustedCapitalizedCost + residualValue) * moneyFactor) * (1 + taxRate));

  return payment.toFixed(2);
};

function LeasingPaymentCalculator ({
  downPayment = 0,
  mileage = 12.5,
  term = 24,
  actualDownPayment = 0,
  msrp = 0,
  moneyFactor = 0.00336,
  fees = [],
  tradeIn = 0,
  rebates = [],
  taxRate = 0,
  onChange = () => {}
}) {
  const totalFees = fees.reduce((total, fee) => {
    return total + parseFloat(fee.amount);
  }, 0);

  const totalRebates = rebates.reduce((total, rebate) => {
    return total + parseFloat(rebate.amount);
  }, 0);

  const monthlyPayment = calculateMonthlyPayment(msrp, moneyFactor, term, mileage, totalFees, downPayment, tradeIn, taxRate, totalRebates);

  const changeMileage = (val) => {
    onChange({ field: 'mileage', value: val });
  };

  const changeTerm = (val) => {
    onChange({ field: 'term', value: val });
  };

  const changeDownPayment = (val) => {
    onChange({ field: 'downPayment', value: val });
  };

  const totalPrice = (msrp + fees) - (tradeIn - totalRebates, totalFees);

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.payment}><span>$</span>{formatCurrency(monthlyPayment, true)} <span className={cls.perMonth}>/ month*</span></h1>

      <div className={cls.calculatorWrapper}>
        <Slider
          min={0}
          max={(totalPrice / 2).toFixed(0) - 100}
          value={downPayment}
          step={100}
          onChange={changeDownPayment}
          label="Down Payment"
          displayedValue={formatCurrency(downPayment)}
        />
        <Slider
          min={12}
          max={48}
          value={term}
          step={12}
          onChange={changeTerm}
          label="Months"
          displayedValue={`${term}`}
        />
        <Slider
          min={10}
          max={15}
          value={mileage}
          step={2.5}
          onChange={changeMileage}
          label="Mileage"
          displayedValue={`${Math.floor(mileage)}k`}
        />
      </div>

      <div className={cls.finePrintSection}>
        * Estimated monthly payment; your actual monthly payment may vary.
      </div>
    </div>
  );
}

export default LeasingPaymentCalculator;