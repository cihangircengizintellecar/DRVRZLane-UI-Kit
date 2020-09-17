import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FinancingTerms from './FinancingTerms';

describe('FinancingTerms test (retail)', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      monthlyPay: 408.23,
      apr: 4.1,
      terms: 72
    };

    _wrapper = shallow(<FinancingTerms {..._props} />);
  });

  it('should display monthly pay', () => {
    expect(_props.monthlyPay).to.not.equal(undefined);
    expect(_props.monthlyPay).to.not.equal(null);
    expect(_props.monthlyPay).to.not.equal('');
  });

  it('should display apr', () => {
    expect(_props.apr).to.not.equal(undefined);
    expect(_props.apr).to.not.equal(null);
    expect(_props.apr).to.not.equal('');
  });

  it('should display terms', () => {
    expect(_props.terms).to.not.equal(undefined);
    expect(_props.terms).to.not.equal(null);
    expect(_props.terms).to.not.equal('');
  });
});

describe('FinancingTerms test (lease)', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      monthlyPay: 408.23,
      apr: 4.1,
      terms: 72,
      mileage: 12000
    };

    _wrapper = shallow(<FinancingTerms {..._props} />);
  });

  it('should display monthly pay', () => {
    expect(_props.monthlyPay).to.not.equal(undefined);
    expect(_props.monthlyPay).to.not.equal(null);
    expect(_props.monthlyPay).to.not.equal('');
  });

  it('should display terms', () => {
    expect(_props.terms).to.not.equal(undefined);
    expect(_props.terms).to.not.equal(null);
    expect(_props.terms).to.not.equal('');
  });

  it('should annual mileage', () => {
    expect(_props.mileage).to.not.equal(undefined);
    expect(_props.mileage).to.not.equal(null);
    expect(_props.mileage).to.not.equal('');
  });
});
