import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import OfferEMRow from './OfferEMRow';
import Button from '../Button';

describe('OfferRow', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = mount(<OfferEMRow />);
  });

  it('should render an archive button', () => {
    expect(_wrapper.find(Button).length).to.equal(1);
  });

  it('should render a disabled archive button if readOnly', () => {
    _wrapper.setProps({ readOnly: true });
    expect(_wrapper.find(Button).props().disabled).to.equal(true);
  });
});
