import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DealSummary from './DealSummary';
import lexusLogoImage from './lexus-logo.png';

storiesOf('DealSummary', module)
  .add('cash', () => (
    <DealSummary
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer={{ value: '13495', requirements: '2015 Lexus CT (White)' }}
      tradeInAmountOwed="0"
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
          name: 'Military & Veteran Discount',
          amount: '500',
          requirements: 'This special offer is for those who\'ve risked their lives defending us.'
        },
        {
          name: 'Automatic Fastlane Discount',
          amount: '100',
          requirements: 'Congratulations, you qualify!.'
        }]
      }
      warrantiesAndAddons={
        [{
          title: '100,000 Ext. Warranty',
          price: '500',
          description: 'A description of the item goes here'
        },
        {
          title: 'Gap Insurance'
        },
        {
          title: 'Extra Addons',
          price: '200'
        }]
      }
      onExpand={action('onExpandDiscount')}
      total="21796"
    />
  ))
  .add('financing', () => (
    <DealSummary
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer={{ value: '13495', requirements: '2015 Lexus CT (White)' }}
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
          name: 'Military & Veteran Discount',
          amount: '500',
          requirements: 'This special offer is for those who\'ve risked their lives defending us.'
        },
        {
          name: 'Automatic Fastlane Discount',
          amount: '100',
          requirements: 'Congratulations, you qualify!.'
        }]
      }
      warrantiesAndAddons={
        [{
          title: '100,000 Ext. Warranty',
          price: '500',
          description: 'A description of the item goes here'
        },
        {
          title: 'Gap Insurance'
        },
        {
          title: 'Extra Addons',
          price: '200'
        }]
      }
      onExpand={action('onExpandDiscount')}
      downPayment="500"
      totalLoanAmount="21796"
      totalMonthlyPayment="500"
      apr="4.2"
      terms="60"
    />
  ))
  .add('leasing', () => (
    <DealSummary
      isLeasing
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer={{ value: '13495', requirements: '2015 Lexus CT (White)' }}
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
          name: 'Military & Veteran Discount',
          amount: '500',
          requirements: 'This special offer is for those who\'ve risked their lives defending us.'
        },
        {
          name: 'Automatic Fastlane Discount',
          amount: '100',
          requirements: 'Congratulations, you qualify!.'
        }]
      }
      warrantiesAndAddons={
        [{
          title: '100,000 Ext. Warranty',
          price: '500',
          description: 'A description of the item goes here'
        },
        {
          title: 'Gap Insurance'
        },
        {
          title: 'Extra Addons',
          price: '200'
        }]
      }
      onExpand={action('onExpandDiscount')}
      downPayment="500"
      totalMonthlyPayment="500"
      mileage="12"
      terms="60"
    />
  ))
  .add('with zero downpayment (String)', () => (
    <DealSummary
      isLeasing
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer={{ value: '13495', requirements: '2015 Lexus CT (White)' }}
      tradeInAmountOwed="1000.00"
      onExpand={action('onExpandDiscount')}
      downPayment="0"
      totalMonthlyPayment="500"
      mileage="12"
      terms="60"
    />
  ))
  .add('with zero down payment (obj... for whatever reason)', () => (
    <DealSummary
      isLeasing
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer={{ value: '13495', requirements: '2015 Lexus CT (White)' }}
      tradeInAmountOwed="00.00"
      onExpand={action('onExpandDiscount')}
      downPayment={0}
      totalMonthlyPayment="500"
      mileage="12"
      terms="60"
    />
  ));
