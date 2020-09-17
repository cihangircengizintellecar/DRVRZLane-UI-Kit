import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import RadioButtonGroup from './RadioButtonGroup';
import RadioButton from './RadioButton';

describe('RadioButton test', () => {
  let _props;
  let _wrapper;
  let _spies;

  beforeEach(() => {
    _spies = {};
    _props = {
      // recordField: 'RadioGroup1',
      // onChange: (_spies.onClick = sinon.spy()),
      // options:
      //   [{
      //     displayValue: 'Yes',
      //     value: 'yes'
      //   },
      //   {
      //     displayValue: 'No',
      //     value: 'no'
      //   },
      //   {
      //     displayValue: 'I Do Not Believe In Hats',
      //     value: 'nonBeliever'
      //   }]
    };

    _wrapper = shallow(<RadioButton {..._props} />);
  });

  it('should set the selected value of the radio button group to equal the value of selected radio button', () => {
    _wrapper.find('input').simulate('keyPress', {key: 'Enter'});
    expect(_wrapper.prop('selectedValue')).to.equal(_props.value);
  });
});
