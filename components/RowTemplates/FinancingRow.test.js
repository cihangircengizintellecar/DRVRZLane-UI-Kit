import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import FinancingRow from './FinancingRow';

describe('FinancingRow', () => {
  let _wrapper;
  let _props;

  beforeEach(() => {
    _props = {
      name: 'DialexaBank'
    };
    _wrapper = mount(<FinancingRow {..._props} />);
  });

  it('should have isSelected set to false in state by default', () => {
    expect(_wrapper.state('isSelected')).to.equal(false);
  });

  it('should set isSelected in state to whatever prop is passed', () => {
    _wrapper.setProps({ isSelected: true });
    expect(_wrapper.state('isSelected')).to.equal(true);
  });

  it('should render the correct name', () => {
    expect(_wrapper.find('#name').text()).to.equal(_props.name);
  });

});
