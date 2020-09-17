import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FinancingTerms from './FinancingTerms';

storiesOf('FinancingTerms', module)
  .add('default', () => (
    <FinancingTerms
      monthlyPay="408.23"
      apr="4.1"
      terms="72"
    />
  ))
  .add('with two zeros', () => (
    <FinancingTerms
      monthlyPay="408.00"
      apr="4.1"
      terms="72"
      isSelected={true}
    />
  ))
  .add('with at trailing zero', () => (
    <FinancingTerms
      monthlyPay="408.20"
      apr="4.1"
      terms="72"
      isSelected={false}
    />
  ))
  .add('with no trailing zero', () => (
    <FinancingTerms
      monthlyPay="408.2"
      apr="4.1"
      terms="72"
      isSelected={false}
    />
  ))
  .add('is selected!', () => (
    <FinancingTerms
      monthlyPay="408.23"
      apr="4.1"
      terms="72"
      isSelected={true}
    />
  ))
  .add('(Ex. For Retail Offer)', () => (
    <FinancingTerms
      monthlyPay="408.23"
      apr="4.1"
      terms="72"
      mileage={null}
      isSelected={false}
    />
  ))
  .add('(Ex. For Lease Offer)', () => (
    <FinancingTerms
      monthlyPay="408.23"
      apr="4.1"
      terms="72"
      mileage="12000"
      isSelected={false}
    />
  ))
  .add('read only', () => (
    <FinancingTerms
      monthlyPay="408.23"
      apr="4.1"
      terms="72"
      readOnly
    />
  ));
