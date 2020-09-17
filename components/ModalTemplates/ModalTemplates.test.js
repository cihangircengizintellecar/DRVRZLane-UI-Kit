import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import SuccessModal from './Success.modal';
import SuccessWide from './SuccessWide.modal';
import classes from './ModalTemplates.scss';
import checkImage from './check.png';

describe('ModalTemplates test', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      header: 'Success',
      message: 'Test Modal Message'
    };

    _wrapper = mount(<SuccessModal {..._props} />);
  });

  it('should render a success modal with the correct classname', () => {
    expect(_wrapper.find('div').first().props().className).to.equal(classes.SuccessModal);
  });

  it('should display a logo if hasLogo prop is not provided and defaults to true', () => {
    expect(_wrapper.find('img')).to.have.length(1);
  });

  it('should display an image with the src of checkImage.png in the same directory ', () => {
    expect(_wrapper.find('img').props().src).to.equal(checkImage);
  });

  it('should not display a logo if hasLogo prop is set to false', () => {
    _props.hasLogo = false;
    _wrapper = mount(<SuccessModal {..._props} />);
    expect(_wrapper.find('img')).to.have.length(0);
  });
});

describe('ModalTemplates test', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      header: 'Success',
      message: 'Test Modal Message'
    };

    _wrapper = mount(<SuccessWide {..._props} />);
  });

  it('should render a success modal with the correct classname', () => {
    expect(_wrapper.find('div').first().props().className).to.equal(classes.SuccessWideModal);
  });

  it('should display a logo', () => {
    expect(_wrapper.find('img')).to.have.length(1);
  });

  it('should display an image with the src of checkImage.png in the same directory ', () => {
    expect(_wrapper.find('img').props().src).to.equal(checkImage);
  });
});
