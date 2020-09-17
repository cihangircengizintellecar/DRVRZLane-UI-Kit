import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import expandImage from './expand.png';

import ExpandButton from './ExpandButton';
import classes from './ExpandButton.scss';

describe('ExpandButton test', () => {
  let _props;
  let _spies;
  let _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      onClick: (_spies.onClick = sinon.spy())
    };

    _wrapper = mount(<ExpandButton {..._props} />);
  });

  it('should render image tag with correct classname', () => {
    expect(_wrapper.find('img').props().className).to.equal(classes.ExpandButton);
  });

  it('should fire onClick when image is clicked', () => {
    _wrapper.find('img').simulate('click');
    expect(_spies.onClick.callCount).to.equal(1);
  });

  it('img tag should have a src of the expandImage.png in same directory', () => {
    expect(_wrapper.find('img').props().src).to.equal(expandImage);
  });
});
