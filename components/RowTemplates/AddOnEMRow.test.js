import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import AddOnEMRow from './AddOnEMRow';
import Button from '../Button';
import Column from '../TableElements/Column';

describe('AddOnEMRow', () => {
  let _wrapper;
  let _props;

  beforeEach(() => {
    _props = {
      image: '',
      name: '',
      requirements: '',
      value: 50
    };
    _wrapper = mount(<AddOnEMRow {..._props} />);
  });

  it('should render an archive button', () => {
    expect(_wrapper.find(Button).length).to.equal(1);
  });

  it('should render a disabled archive button if readOnly', () => {
    _wrapper.setProps({ readOnly: true });
    expect(_wrapper.find(Button).props().disabled).to.equal(true);
  });

  it('should not add a $ to the price value', (done) => {
    expect(_wrapper.find(Column).at(1).find('div').at(2).text()).to.equal(_props.value.toLocaleString());
    _wrapper.setProps({ value: '50' }, () => {
      expect(_wrapper.find(Column).at(1).find('div').at(2).text()).to.equal(_props.value.toLocaleString());
      done();
    });
  });

});
