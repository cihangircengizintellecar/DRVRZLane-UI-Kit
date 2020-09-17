import React from 'react';
import { storiesOf } from '@storybook/react';

import LeasingPaymentCalculator from './LeasingPaymentCalculator';

class LeasingPaymentCalculatorStory extends React.Component {
  state = {
    msrp: 40000,
    downPayment: 5000,
    mileage: 12.5,
    term: 48,
    rebates: [
      {
        amount: '300'
      },
      {
        amount: '500'
      }
    ],
    fees: [
      {
        amount: '100'
      },
      {
        amount: '70'
      }
    ],
    tradeIn: 3000
  };

  onChange = ({ field, value }) => {
    this.setState(() => {
      return {
        [field]: value
      };
    });
  }

  render () {
    return (
      <LeasingPaymentCalculator
        msrp={this.state.msrp}
        downPayment={this.state.downPayment}
        mileage={this.state.mileage}
        term={this.state.term}
        rebates={this.state.rebates}
        taxRate={0.0625}
        onChange={this.onChange}
      />
    );

  }
}

storiesOf('LeasingPaymentCalculator', module)
  .add('calculates payments', () => (
    <LeasingPaymentCalculatorStory />
  ));
