import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import AddFeeRow from './AddFeeRow';
import Button from '../Button';

describe('AddFeeRow', () => {
  let _wrapper;
  let _props;

  beforeEach(() => {
    _props = {
      name: 'Waffle Tax',
      price: '500.00',
      onArchive: () => {}
    };
    _wrapper = mount(<AddFeeRow {..._props} />);
  });

  it('should render an archive button', () => {
    expect(_wrapper.find(Button).length).to.equal(1);
  });

  it('should render the correct name', () => {
    expect(_wrapper.find('#name').text()).to.equal(_props.name);
  });

  it('should render the correct price', () => {
    expect(_wrapper.find('#price').text()).to.equal(_props.price);
  });
});
