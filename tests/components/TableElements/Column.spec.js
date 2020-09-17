import React from 'react';
import TableElements from 'components/TableElements';
import { shallow } from 'enzyme';
import cls from 'components/TableElements/TableElements.scss';

describe('(Component) TableElements.Column', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = shallow(<TableElements.Column />);
  });

  it('Should render a td DOM element with className TableColumn', () => {
    expect(_wrapper.find('td')).to.exist;
    expect(_wrapper.find('td')).to.have.className(cls.TableColumn);
  });
});