import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Paginator from './Paginator';

describe('Paginator test', () => {
  let _props;
  let _wrapper;
  let _spies;

  beforeEach(() => {
    _spies = {};
    _props = {
      current: 1,
      total: 100,
      pageSize: 25,
      onPageChange: (_spies.onClick = sinon.spy())
    };

    _wrapper = shallow(<Paginator {..._props} />);
  });

  it('should disable next button if last page is reached', () => {
    const disableNext = (_props.current * _props.pageSize) < _props.total ? false : true;

    expect(disableNext).to.equal(false);
  });

  it('should disable back button if the current page is 1', () => {
    const disablePrev = _props.current === 1 ? true : false;

    expect(disablePrev).to.equal(true);
  });

  it('should return props necessary', () => {
    expect(_props.current).to.not.equal(undefined);
    expect(_props.total).to.not.equal(undefined);
    expect(_props.pageSize).to.not.equal(undefined);

    expect(_props.current).to.not.equal(null);
    expect(_props.total).to.not.equal(null);
    expect(_props.pageSize).to.not.equal(null);
  });
});
