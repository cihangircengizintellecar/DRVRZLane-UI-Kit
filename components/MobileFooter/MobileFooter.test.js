import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MobileFooter from './MobileFooter';
import PurchaseLineItem from '../PurchaseLineItem';

describe('MobileFooter test', () => {
  let _props;
  let _wrapper;
  let _spies;

  beforeEach(() => {
    _spies = {};
    _props = {
      dealerLogo: '',
      msrp: '35,291.00',
      tradeInOffer: '13,495.00',
      total: '35,291.00',
      carToPurchase: {
        manufacturerLogo: '',
        name: '2017 Lexus RX 350',
        color: 'Nebula Gray Pearl',
        vin: '734234SA234198',
        condition: 'New'
      },
      carToTradeIn: {
        manufacturerLogo: '',
        name: '2014 Lexus RX 350',
        color: 'Gray',
        vin: '232TTE34A12312',
        condition: 'Used'
      },
      extraFees: [
        {
          name: 'Cookie Fee',
          value: '1000'
        },
        {
          name: 'Waffle Tax',
          value: '9'
        }
      ],
      offersAndIncentives: [
        {
          name: 'Military Discount',
          value: '1',
          infoType: 'discount'
        },
        {
          name: 'Automatic Fastlane Discount',
          value: '2',
          infoType: 'discount'
        },
        {
          name: 'Special Discount',
          value: '10',
          infoType: 'discount'
        }
      ],
      warrantiesAndAddons: [
        {
          title: '100,000 Ext. Warranty'
        },
        {
          title: 'Gap Insurance'
        }
      ],
      onClick: (_spies.onClick = sinon.spy())
    };

    _wrapper = shallow(<MobileFooter {..._props} />);
  });

  it('should be hidden by default', () => {
    expect(_wrapper.state().show).to.equal(false);
    expect(_wrapper.hasClass('hidden'));
  });

  it('should have correct classname when state is show: false', () => {
    expect(_wrapper.state().show).to.equal(false);
    expect(_wrapper.hasClass('hidden'));
  });

  it('should have correct classname when state is show: true', () => {
    _wrapper.simulate('click');
    expect(_wrapper.state().show).to.equal(true);
    expect(_wrapper.hasClass('shown'));
  });

  it('should return props necessary', () => {
    expect(_props.carToPurchase.manufacturerLogo).to.not.equal(undefined);
    expect(_props.carToPurchase.name).to.not.equal(undefined);
    expect(_props.carToPurchase.color).to.not.equal(undefined);
    expect(_props.carToPurchase.vin).to.not.equal(undefined);
    expect(_props.msrp).to.not.equal(undefined);
    expect(_props.total).to.not.equal(undefined);

    expect(_props.carToPurchase.manufacturerLogo).to.not.equal(null);
    expect(_props.carToPurchase.name).to.not.equal(null);
    expect(_props.carToPurchase.color).to.not.equal(null);
    expect(_props.carToPurchase.vin).to.not.equal(null);
    expect(_props.msrp).to.not.equal(null);
    expect(_props.total).to.not.equal(null);
  });

  it('should show a negative sign for line items with negative prop', () => {
    const PurchaseLineItems = _wrapper.find(PurchaseLineItem);
    PurchaseLineItems.filter(d => {
      return d.prop('negative');
    });
    PurchaseLineItems.filter(d => {
      expect(d.prop('value').toString().indexOf('-')).to.equal(1);
    });
  });
});
