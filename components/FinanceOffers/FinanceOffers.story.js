import React from 'react';
import { storiesOf } from '@storybook/react';

import FinanceOffers from './FinanceOffers';

storiesOf('FinanceOffers', module)
  .add('with leasing information', () => {
    const retailOffers = [
      {
        apr: '3.20',
        financeCharge: '1197.65',
        isSelected: true,
        monthlyPayment: '399.05',
        subTotal: '16900.55',
        tax: '1056.28',
        taxRate: '6.25',
        term: '48',
        total: '16900.55'
      },
      {
        apr: '4.20',
        financeCharge: '1197.65',
        isSelected: true,
        monthlyPayment: '300.05',
        subTotal: '16900.55',
        tax: '1056.28',
        taxRate: '6.25',
        term: '48',
        total: '16900.55'
      }
    ];
    const leasingOffers = [
      {
        apr: '.0005',
        financeCharge: '1197.65',
        isSelected: true,
        monthlyPayment: '399.05',
        subTotal: '16900.55',
        tax: '1056.28',
        taxRate: '6.25',
        term: '48',
        total: '16900.55'
      },
      {
        apr: '.0005',
        financeCharge: '1197.65',
        isSelected: true,
        monthlyPayment: '300.05',
        subTotal: '16900.55',
        tax: '1056.28',
        taxRate: '6.25',
        term: '48',
        total: '16900.55'
      }
    ];

    const selectOffer = () => () => {};

    return (
      <FinanceOffers
        retailOffers={retailOffers}
        leasingOffers={leasingOffers}
        selectOffer={selectOffer}
      />
    );
  })
  .add('without leasing information', () => {
    const retailOffers = [
      {
        apr: '3.20',
        financeCharge: '1197.65',
        isSelected: true,
        monthlyPayment: '399.05',
        subTotal: '16900.55',
        tax: '1056.28',
        taxRate: '6.25',
        term: '48',
        total: '16900.55'
      },
      {
        apr: '4.20',
        financeCharge: '1197.65',
        isSelected: true,
        monthlyPayment: '300.05',
        subTotal: '16900.55',
        tax: '1056.28',
        taxRate: '6.25',
        term: '48',
        total: '16900.55'
      }
    ];

    const selectOffer = () => () => {};

    return (
      <FinanceOffers
        retailOffers={retailOffers}
        leasingOffers={[]}
        selectOffer={selectOffer}
      />
    );
  });
