import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import VehicleInformationCard from './VehicleInformationCard';
import placeholderManufacturerImage from './lexus-logo.png';

describe('VehicleInformationCard test', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      manufacturerLogo: placeholderManufacturerImage,
      year: '2017',
      name: 'Lexus RX 350',
      color: 'Nebula Gray Pearl',
      vin: '1HGBH41JXMN109186',
      condition: 'Used',
      toggleSelect: sinon.spy(),
      isSelected: false
    };

    _wrapper = shallow(<VehicleInformationCard {..._props} />);
  });

  it('should call props.toggleSelect when selected', () => {
    _wrapper.simulate('click');
    expect(_props.toggleSelect.callCount).to.equal(1);
    expect(_props.toggleSelect.getCall(0).calledWith(true));
  });

  it('should display the manufacturer logo of the vehicle', () => {
    expect(_props.manufacturerLogo).to.not.equal(undefined);
    expect(_props.manufacturerLogo).to.not.equal(null);
    expect(_props.manufacturerLogo).to.not.equal('');
  });

  it('should display the year of the vehicle', () => {
    expect(_props.year).to.not.equal(undefined);
    expect(_props.year).to.not.equal(null);
    expect(_props.year).to.not.equal('');
  });

  it('should display the name of the vehicle', () => {
    expect(_props.name).to.not.equal(undefined);
    expect(_props.name).to.not.equal(null);
    expect(_props.name).to.not.equal('');
  });

  it('should display the color of the vehicle', () => {
    expect(_props.color).to.not.equal(undefined);
    expect(_props.color).to.not.equal(null);
    expect(_props.color).to.not.equal('');
  });

  it('should display the vin of the vehicle', () => {
    expect(_props.vin).to.not.equal(undefined);
    expect(_props.vin).to.not.equal(null);
    expect(_props.vin).to.not.equal('');
  });

  it('should display the condition of the vehicle', () => {
    expect(_props.condition).to.not.equal(undefined);
    expect(_props.condition).to.not.equal(null);
    expect(_props.condition).to.not.equal('');
  });
});
