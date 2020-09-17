import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableElements from './TableElements';
import Table from './Table';
import TableHeaderCell from './TableHeaderCell';
import Row from './Row';
import Column from './Column';

describe('TableElements test', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      headings: [
        { label: '1' },
        { label: '2' },
        { label: '3' }
      ]
    };

    _wrapper = shallow(<Table {..._props} />);
  });

  it('should render table header cell components for each table heading', () => {
    expect(_wrapper.find(TableHeaderCell).length).to.equal(_props.headings.length);
  });
});
