import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';

import MobileFooter from './MobileFooter';
import dealerLogoImage from './sewell-logo.png';
import newManufacturerLogoImage from './lexus-logo.png';
import tradeInManufacturerLogoImage from './lexus-logo.png';

storiesOf('MobileFooter', module)
  .add('has tradein', () => (
    <MobileFooter
      className={'customClass'}
      dealerLogo={dealerLogoImage}
      carToPurchase={{
        manufacturerLogo: newManufacturerLogoImage,
        name: '2017 Lexus RX 350',
        color: 'Nebula Gray Pearl',
        vin: '734234SA234198',
        condition: 'New'
      }}
      carToTradeIn={{
        manufacturerLogo: tradeInManufacturerLogoImage,
        name: '2015 Lexus RX 300h',
        color: 'Gray',
        vin: '232TTE34A12312',
        condition: 'Used'
      }}
      msrp="35,291.00"
      tradeInOffer="13495.00"
      tradeInAmountOwed="1200"
      total="35,291.00"
    />
  ))
  .add('amount owed weirdness', () => (
    <MobileFooter
      className={'customClass'}
      dealerLogo={dealerLogoImage}
      carToPurchase={{
        manufacturerLogo: newManufacturerLogoImage,
        name: '2017 Lexus RX 350',
        color: 'Nebula Gray Pearl',
        vin: '734234SA234198',
        condition: 'New'
      }}
      carToTradeIn={{
        manufacturerLogo: tradeInManufacturerLogoImage,
        name: '2015 Lexus RX 300h',
        color: 'Gray',
        vin: '232TTE34A12312',
        condition: 'Used'
      }}
      msrp="35,291.00"
      tradeInOffer="13495.00"
      tradeInAmountOwed="00.00"
      total="35,291.00"
    />
  ))
  .add('does not have tradein', () => (
    <MobileFooter
      className={'customClass'}
      dealerLogo={dealerLogoImage}
      carToPurchase={{
        manufacturerLogo: newManufacturerLogoImage,
        name: '2017 Lexus RX 350',
        color: 'Nebula Gray Pearl',
        vin: '734234SA234198',
        condition: 'New'
      }}
      carToTradeIn={{
        manufacturerLogo: tradeInManufacturerLogoImage,
        name: null,
        color: 'Gray',
        vin: '232TTE34A12312',
        condition: 'Used'
      }}
      msrp="35,291.00"
      total="35,291.00"
    />
  ))
  .add('has everything', () => (
    <MobileFooter
      className={'customClass'}
      dealerLogo={dealerLogoImage}
      carToPurchase={{
        manufacturerLogo: newManufacturerLogoImage,
        name: '2017 Lexus RX 350',
        color: 'Nebula Gray Pearl',
        vin: '734234SA234198',
        condition: 'New'
      }}
      carToTradeIn={{
        manufacturerLogo: tradeInManufacturerLogoImage,
        name: null,
        color: 'Gray',
        vin: '232TTE34A12312',
        condition: 'Used'
      }}
      msrp="35,291.00"
      tradeInOffer="13495"
      tradeInAmountOwed="0"
      total="35,291.00"
      tax="99.99"
      extraFees={
        [{
          name: 'Cookie Fee',
          amount: '1000'
        },
        {
          name: 'Waffle Tax',
          amount: '9'
        }]
      }
      offersAndIncentives={
        [{
          name: 'Military Discount',
          amount: '1',
          infoType: 'discount'
        },
        {
          name: 'Automatic Fastlane Discount',
          amount: '2',
          infoType: 'discount'
        },
        {
          name: 'Special Discount',
          amount: '10',
          infoType: 'discount'
        }]
      }
      warrantiesAndAddons={
        [{
          title: '100,000 Ext. Warranty',
          price: '150'
        },
        {
          title: 'Gap Insurance'
        }]
      }
    />));
