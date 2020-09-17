import React from 'react';
import { storiesOf } from '@kadira/storybook';

import PurchaseInformation from './PurchaseInformation';
import lexusLogoImage from './lexus-logo.png';

storiesOf('PurchaseInformation', module)
  .add('default', () => (
    <PurchaseInformation
      headerText="Fastlane Purchase Information"
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      mileage=""
      tradeInOffer="13495"
      tradeInAmountOwed="1000"
      monthlyPayment=""
      tax="100"
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
      total="21796"
    />
  ))
  .add('has retail financing terms on Credit Check page', () => (
    <PurchaseInformation
      headerText="Fastlane Purchase Information"
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer="13495"
      tradeInAmountOwed="1000"
      downPayment="5000"
      monthlyPayment="450.09"
      apr="3.5"
      terms="60"
      tax="100"
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
      leasingVehicle={false}
      totalLoanAmount="16796"
    />
  ))
  .add('has retail financing terms on Financing Offers page', () => (
    <PurchaseInformation
      headerText="Fastlane Purchase Information"
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer="13495"
      tradeInAmountOwed="1000"
      downPayment="5000"
      monthlyPayment="450.09"
      apr="3.5"
      terms="60"
      tax="100"
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
      leasingVehicle={false}
      totalLoanAmount="16796"
    />
  ))
  .add('has lease financing terms on the Credit Check page', () => (
    <PurchaseInformation
      headerText="Fastlane Purchase Information"
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer="13495"
      tradeInAmountOwed="1000"
      downPayment="5000"
      monthlyPayment="450.09"
      mileage="12000"
      terms="60"
      tax="100"
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
      leasingVehicle={true}
      totalMonthlyPayment="-"
    />
  ))
  .add('has lease financing terms on the financing offers page and the value is empty', () => (
    <PurchaseInformation
      headerText="Fastlane Purchase Information"
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer="13495"
      tradeInAmountOwed="1000"
      downPayment="5000"
      monthlyPayment="450.09"
      mileage="12000"
      terms="60"
      tax="100"
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
      leasingVehicle={true}
      totalMonthlyPayment="-"
    />
  ))
  .add('has lease financing terms on the financing offers page', () => (
    <PurchaseInformation
      headerText="Fastlane Purchase Information"
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer="13495"
      tradeInAmountOwed="1000"
      downPayment="5000"
      monthlyPayment="450.09"
      mileage="12000"
      terms="60"
      tax="100"
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
        },
        {
          title: 'Null AddOn',
          price: null
        }]
      }
      leasingVehicle={true}
      totalMonthlyPayment="450.09"
    />
  ))
  .add('has zero down payment', () => (
    <PurchaseInformation
      headerText="Fastlane Purchase Information"
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer="13495"
      downPayment="0"
      monthlyPayment="450.09"
      apr="3.5"
      terms="60"
      tax="100"
      leasingVehicle={false}
      totalLoanAmount="16796"
    />
  ))
  .add('trade in amount owed test', () => (
    <PurchaseInformation
      headerText="Fastlane Purchase Information"
      manufacturerLogo={lexusLogoImage}
      carName="2017 Lexus RX 350"
      carColor="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      msrp="35291"
      tradeInOffer="13495"
      tradeInAmountOwed="00"
      downPayment="0"
      monthlyPayment="450.09"
      apr="3.5"
      terms="60"
      tax="100"
      leasingVehicle={false}
      totalLoanAmount="16796"
    />
  ));
