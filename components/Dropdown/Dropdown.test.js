import React from 'react';
import { Dropdown } from './Dropdown';
import { mount } from 'enzyme';
import { expect } from 'chai';

describe('(Component) Dropdown', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      label: 'dropdownLabel',
      options: ['OptionRiver', 'OptionMal', 'OptionJayne'],
      dropdownAttrs: {
        name: 'dropdownName'
      },
      onChange: () => {},
      onBlur: () => {},
      validateFunction: () => {},
      validationErrors: [],
      recordField: 'dropdownRecord'
    };
    _wrapper = mount(<Dropdown {..._props} />);
  });

  describe('Upon render the component...', () => {
    it('should display the correct label', () => {
      expect(_wrapper.find('label').text()).to.equal(_props.label);
    });

    it('should have the correct value when passed a selectedValue', () => {
      _wrapper.setProps({ selectedValue: 'OptionRiver' });
      expect(_wrapper.find('select').props().value).to.equal(_wrapper.props().selectedValue);
    });

    it('Should have the same number of options as `options` in props plus one', () => {
      const numOp = _wrapper.props().options.length;
      expect(_wrapper.find('option').length).to.equal(numOp + 1);
    });

    it('Should have the correct `id` when passed a `recordField` in props', () => {
      const rf = _wrapper.props().recordField;
      expect(_wrapper.find('select').props().id).to.equal(rf);
    });

    it('Should have input attributes that match all passed in `dropdownAttrs` prop', () => {
      const dropdownAttrs = _wrapper.props().dropdownAttrs;
      expect(_wrapper.find('select').props().name).to.equal(dropdownAttrs.name);
    });
  });
});
