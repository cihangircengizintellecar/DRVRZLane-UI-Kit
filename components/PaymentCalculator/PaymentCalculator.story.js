import React from 'react';
import { storiesOf } from '@kadira/storybook';

import PaymentCalculator from './PaymentCalculator';

class PaymentCalculatorStory extends React.Component {
  state = {
    totalPrice: 40000,
    downPayment: 5000,
    apr: 5.6,
    term: 48
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
      <PaymentCalculator
        totalPrice={this.state.totalPrice}
        downPayment={this.state.downPayment}
        apr={this.state.apr}
        term={this.state.term}
        onChange={this.onChange}
      />
    );

  }
}

storiesOf('PaymentCalculator', module)
  .add('calculates payments', () => (
    <PaymentCalculatorStory />
  ));
