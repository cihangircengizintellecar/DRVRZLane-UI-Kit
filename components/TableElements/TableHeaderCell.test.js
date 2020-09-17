import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableHeaderCell from './TableHeaderCell';

describe('TableHeaderCell test', () => {
  let _spies;
  let _props;
  let _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      classNames: [],
      label: 'Date Modified',
      sortByKey: 'date_modified',
      sortDirection: 'desc',
      isCurrentSortBy: true,
      onClick: (_spies.onClick = sinon.spy())
    };

    _wrapper = shallow(<TableHeaderCell {..._props} />);
  });

  it('should render a label', () => {
    expect(_wrapper.text()).to.equal(_props.label.toUpperCase());
  });

  it('should display a sort arrow if it is the current sort column', () => {
    expect(_wrapper.find('img')).to.exist;
  });

  it('should toggle sort direction and call onClick when clicked', () => {
    _wrapper.simulate('click');
    _spies.onClick.should.have.been.calledWith({ sortByKey: _props.sortByKey, sortDirection: 'asc' });
  });
});
