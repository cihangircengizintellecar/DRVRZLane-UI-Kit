import React from 'react';
import { shallow } from 'enzyme';
import SoloCheckbox from './';
import cls from './SoloCheckbox.scss';

describe('(Component) SoloCheckbox', () => {
  let _wrapper;
  let _props;
  let _spies;

  beforeEach(() => {
    _spies = {};
    _props = {
      id: 'agreeToTerms',
      isSelected: false,
      onSelect: (_spies.onSelect = sinon.spy()),
      label: 'Do you agree?',
      value: ''
    };

    _wrapper = shallow(<SoloCheckbox {..._props} />);
  });

  it('renders', () => {
    expect(_wrapper.find(hook('solo-checkbox'))).to.exist;
  });

  it('has id and htmlFor attrs of passed ID', () => {
    expect(_wrapper.find('label').props().htmlFor).to.equal(_props.id);
    expect(_wrapper.find('input').props().id).to.equal(_props.id);
  });

  it('renders correct label as text', () => {
    expect(_wrapper.find('label').text()).to.contain(_props.label);
  });

  it('hides checkbox if isSelected is false', () => {
    expect(_wrapper.find(hook('check-mark')).hasClass(cls.CheckMarkChecked)).to.equal(false);

    _wrapper = shallow(<SoloCheckbox {..._props} isSelected />);
    expect(_wrapper.find(hook('check-mark')).hasClass(cls.CheckMarkChecked)).to.equal(true);
  });

  it('calls onSelect when clicked', () => {
    _wrapper.find('input').simulate('change', { target: { checked: true, field: 'agreeToTerms', value: '' } });
    _spies.onSelect.should.have.been.calledWith({ field: _props.id, checked: true, value: '' });
  });
});
