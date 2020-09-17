import React from 'react';
import TableElements from 'components/TableElements';
import cls from 'components/TableElements/TableElements.scss';
import { shallow } from 'enzyme';

describe('(Component) TableElements.Table', () => {
  let _wrapper;
  let _props;

  beforeEach(() => {
    _props = {
      headings: ['Vin', 'Status', 'Date'],
      children: () => {}
    };

    _wrapper = shallow(<TableElements.Table {..._props} />);
  });

  it('Should render a table DOM element with className Table', () => {
    expect(_wrapper.find('table')).to.exist;
    expect(_wrapper.find('table')).to.have.className(cls.Table);
  });

  it('Should render a thead DOM element', () => {
    expect(_wrapper.find('thead')).to.exist;
  });

  it('Should render a tr DOM element with className HeaderRow', () => {
    expect(_wrapper.find('tr')).to.exist;
    expect(_wrapper.find('tr')).to.have.className(cls.HeaderRow);
  });

  it('Should render a th DOM element with className TableHeader', () => {
    expect(_wrapper.find('th')).to.exist;
    expect(_wrapper.find('th').first()).to.have.className(cls.TableHeader);
  });

  it('Should render a tbody DOM element', () => {
    expect(_wrapper.find('tbody')).to.exist;
  });

  it('Should have props `headings` that is an arrary of string', () => {
    expect(_wrapper.instance().props.headings).to.deep.equal(['Vin', 'Status', 'Date']);
  });
});