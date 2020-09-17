import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DealSummary from './DealSummary';

let addOnsWithValues = [];
let addOnsWithoutValues = [];

describe('DealSummary test', () => {
  let _props;
  let _wrapper;
  let _spies;

  beforeEach(() => {
    _spies = {};
    _props = {
      manufacturerLogo: '',
      carName: '2017 Lexus RX 350',
      carColor: 'Nebula Gray Pearl',
      vin: '1HGBH41JXMN109186',
      msrp: '35291',
      tradeInOffer: { value: '13495', requirements: '2015 Lexus CT (White)' },
      extraFees: [
        {
          name: 'Cookie Fee',
          amount: '1000'
        },
        {
          name: 'Waffle Tax',
          amount: '9'
        }
      ],
      offersAndIncentives: [
        {
          name: 'Military & Veteran Discount',
          value: '500.00',
          requirements: 'This special offer is for those who\'ve risked their lives defending us.'
        }
      ],
      warrantiesAndAddons: [
        {
          name: '100,000 Ext. Warranty',
          price: '234'
        },
        {
          name: 'Gap Insurance'
        }
      ],
      onExpand: (_spies.onExpand = sinon.spy()),
      total: '21530',
      isLeasing: true,
      totalMonthlyPayment: '5000',
      mileage: '12000',
      apr: '4.2',
      terms: '72'
    };

    if (_props.warrantiesAndAddons && _props.warrantiesAndAddons.length > 0) {
      addOnsWithValues = _props.warrantiesAndAddons.filter((w) => {
        return typeof w.price !== 'undefined';
      });
      addOnsWithoutValues = _props.warrantiesAndAddons.filter((w) => {
        return typeof w.price === 'undefined';
      });
    }

    _wrapper = shallow(<DealSummary {..._props} />);
  });

  it('should include offers and add-ons in total', () => {
    const offers = _props.offersAndIncentives.map(offer => parseFloat(offer.value ? offer.value : 0));
    const addOns = addOnsWithValues.map(addOn => parseFloat(addOn.price));
    const offersSum = offers.reduce((a, b) => a + b, 0);
    const addOnsSum = addOns.reduce((a, b) => a + b, 0);
    const totalSum = parseFloat(_props.msrp) - parseFloat(_props.tradeInOffer.value) - offersSum + addOnsSum;

    expect(totalSum).to.equal(parseFloat(_props.total));
  });

  it('should show total monthly payment, mileage, and terms if leasing', () => {
    expect(_props.isLeasing).to.equal(true);
    expect(_props.totalMonthlyPayment).to.not.equal(undefined);
    expect(_props.mileage).to.not.equal(undefined);
    expect(_props.terms).to.not.equal(undefined);
  });
});
