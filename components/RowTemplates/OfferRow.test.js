import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import OfferRow from './OfferRow';

describe('OfferRow', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      isSelected: false
    };
  });

  it('should have isSelected set to false in state by default', () => {
    _wrapper = mount(<OfferRow />);
    expect(_wrapper.state('isSelected')).to.equal(false);
  });

  it('should have readOnly set to false in state by default', () => {
    _wrapper = mount(<OfferRow />);
    expect(_wrapper.state('readOnly')).to.equal(false);
  });

  it('should have hideCheckbox set to undefined by default', () => {
    _wrapper = mount(<OfferRow />);
    expect(_props.hideCheckbox).to.equal(undefined);
  });

  it('should set isSelected in state to whatever prop is passed', () => {
    _props.isSelected = true;
    _wrapper = mount(<OfferRow {..._props} />);
    expect(_wrapper.state('isSelected')).to.equal(true);
  });

  it('should set readOnly in state to whatever prop is passed', () => {
    _props.readOnly = true;
    _wrapper = mount(<OfferRow {..._props} />);
    expect(_wrapper.state('readOnly')).to.equal(true);
  });

});
