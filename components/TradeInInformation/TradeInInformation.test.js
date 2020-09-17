import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TradeInInformation from './TradeInInformation';
import placeholderManufacturerImage from './lexus-logo.png';

describe('TradeInInformation test', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      manufacturerLogo: placeholderManufacturerImage,
      name: '2017 Lexus RX 350',
      color: 'Nebula Gray Pearl',
      vin: '1HGBH41JXMN109186'
    };

    _wrapper = shallow(<TradeInInformation {..._props} />);
  });

  it('should display the manufacturer logo of the trade in vehicle', () => {
    expect(_props.manufacturerLogo).to.not.equal(undefined);
    expect(_props.manufacturerLogo).to.not.equal(null);
    expect(_props.manufacturerLogo).to.not.equal('');
  });

  it('should display the name of the trade in vehicle', () => {
    expect(_props.name).to.not.equal(undefined);
    expect(_props.name).to.not.equal(null);
    expect(_props.name).to.not.equal('');
  });

  it('should display the color of the trade in vehicle', () => {
    expect(_props.color).to.not.equal(undefined);
    expect(_props.color).to.not.equal(null);
    expect(_props.color).to.not.equal('');
  });

  it('should display the vin of the trade in vehicle', () => {
    expect(_props.vin).to.not.equal(undefined);
    expect(_props.vin).to.not.equal(null);
    expect(_props.vin).to.not.equal('');
  });
});
