import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import ModalPopover from './ModalPopover';
import closeImage from './close.png';

describe('(Component) ModalPopover', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      clickClose: () => {},
      isSelfClosing: false
    };
    _wrapper = mount(<ModalPopover {..._props} />);
  });

  it('Should render a close icon if it is not self closing', () => {
    expect(_wrapper.props().isSelfClosing).to.equal(false);
    expect(_wrapper.find('img').props().src).to.equal(closeImage);
  });

  it('Should not render a close icon if self closing', () => {
    _wrapper.setProps({ isSelfClosing: true });
    expect(_wrapper.find('img')).to.have.length(0);
  });
});
