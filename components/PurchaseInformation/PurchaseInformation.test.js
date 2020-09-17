import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PurchaseInformation from './PurchaseInformation';
import PurchaseLineItem from '../PurchaseLineItem';

describe('PurchaseInformation test', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      headerText: 'Fastlane Purchase Information',
      manufacturerLogo: '',
      carName: '2017 Lexus RX 350',
      carColor: 'Nebula Gray Pearl',
      vin: '1HGBH41JXMN109186',
      msrp: '35,291',
      tradeInOffer: '-13,495',
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
      total: '21,796'
    };

    _wrapper = shallow(<PurchaseInformation {..._props} />);
  });

  it('should not render null or undefined values for Trade In Offer', () => {
    const tradeInOffer = _wrapper.find('PurchaseLineItem[name="Trade In Offer"]');
    expect(tradeInOffer.prop('value')).to.not.equal(null);
    expect(tradeInOffer.prop('value')).to.not.equal(undefined);
    expect(tradeInOffer.prop('value')).to.not.equal('undefined');
  });

  it('should not render financing terms section if financing props undefined', () => {
    expect(_props.downPayment).to.equal(undefined);
    expect(_props.monthlyPayment).to.equal(undefined);
    expect(_props.apr).to.equal(undefined);
    expect(_props.terms).to.equal(undefined);
    expect(_wrapper.find('.PurchaseInfoFinancingTerms')).to.have.length(0);
  });

  it('should render financing terms even if apr is set to 0', () => {
    _props = {
      downPayment: 3000,
      monthlyPayment: 300,
      apr: 0,
      terms: 24
    };
    _wrapper = shallow(<PurchaseInformation {..._props} />);

    expect(_wrapper.find('.PurchaseInfoFinancingTerms').children).to.not.have.length(0);
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
