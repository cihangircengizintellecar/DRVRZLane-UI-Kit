import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import DealershipRow from './DealershipRow';

describe('DealershipRow', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      name: 'Sewell',
      franchise: 'Franchise',
      contactPhone: '123-123-1234',
      location: 'Dallas'
    };
    _wrapper = mount(<DealershipRow {..._props} />);
  });

  it('should render the correct name', () => {
    expect(_wrapper.find(hook('rowName')).text()).to.equal(_props.name);
  });

  it('should render the correct ind/franchise classification', () => {
    expect(_wrapper.find(hook('rowFranchise')).text()).to.equal(_props.franchise);
  });

  it('should render the correct manufacturers', () => {
    expect(_wrapper.find(hook('rowContact')).text()).to.equal(_props.contactPhone);
  });

  it('should render the correct location', () => {
    expect(_wrapper.find(hook('rowLocation')).text()).to.equal(_props.location);
  });
});
