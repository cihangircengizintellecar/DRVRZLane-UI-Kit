import React, { PropTypes } from 'react';
import Slider from '../Slider';
import formatCurrency from '../../helpers/FormatCurrency';

import cls from './PaymentCalculator.scss';

PaymentCalculator.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  downPayment: PropTypes.number,
  apr: PropTypes.number,
  term: PropTypes.number,
  actualDownPayment: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

const calculateMonthlyPayment = (price, downPayment, apr, term) => {
  const total = price - downPayment;
  if (apr > 0) {
    const monthlyInterest = (apr / 100) / 12;
    const monthlyAccumulation = Math.pow(1 + monthlyInterest, term);
    return (total * ((monthlyInterest * monthlyAccumulation) / (monthlyAccumulation - 1))).toFixed(2);
  }

  return (total / term).toFixed(2);
};

function PaymentCalculator ({
  totalPrice = 0,
  downPayment = 0,
  apr = 3,
  term = 24,
  actualDownPayment = 0,
  onChange = () => {}
}) {
  // This to correct a few things that may happen with people moving back and forth.
  const total = totalPrice + actualDownPayment;
  const monthlyPayment = calculateMonthlyPayment(total, downPayment, apr, term);

  const changeAPR = (val) => {
    onChange({ field: 'apr', value: val });
  };

  const changeTerm = (val) => {
    onChange({ field: 'term', value: val });
  };

  const changeDownPayment = (val) => {
    onChange({ field: 'downPayment', value: val });
  };

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.payment}><span>$</span>{formatCurrency(monthlyPayment, true)} <span className={cls.perMonth}>/ month</span></h1>

      <div className={cls.calculatorWrapper}>
        <Slider
          min={0}
          max={totalPrice - 100}
          value={downPayment}
          step={100}
          onChange={changeDownPayment}
          label="Down Payment"
          displayedValue={formatCurrency(downPayment)}
        />
        <Slider
          min={12}
          max={72}
          value={term}
          step={12}
          onChange={changeTerm}
          label="Months"
          displayedValue={`${term}`}
        />
        <Slider
          min={0}
          max={15}
          value={apr}
          step={0.1}
          onChange={changeAPR}
          label="APR"
          displayedValue={`${apr}%`}
        />
      </div>
    </div>
  );
}

export default PaymentCalculator;
