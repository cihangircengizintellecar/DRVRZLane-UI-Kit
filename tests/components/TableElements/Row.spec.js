import React from 'react';
import TableElements from 'components/TableElements';
import cls from 'components/TableElements/TableElements.scss';
import { shallow } from 'enzyme';

describe('(Component) TableElements.Row', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = shallow(<TableElements.Row />);
  });

  it('Should render a tr DOM element with className TableRow', () => {
    expect(_wrapper.find('tr')).to.exist;
    expect(_wrapper.find('tr')).to.have.className(cls.TableRow);
  });
});