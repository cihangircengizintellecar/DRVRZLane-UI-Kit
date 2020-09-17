import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import AddOnRow from './AddOnRow';

describe('AddOnRow', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      isSelected: false
    };
  });

  it('should have isSelected set to false in state by default', () => {
    _wrapper = mount(<AddOnRow />);
    expect(_wrapper.state('isSelected')).to.equal(false);
  });

  it('should set isSelected in state to whatever prop is passed', () => {
    _props.isSelected = true;
    _wrapper = mount(<AddOnRow {..._props} />);
    expect(_wrapper.state('isSelected')).to.equal(true);
  });
});
