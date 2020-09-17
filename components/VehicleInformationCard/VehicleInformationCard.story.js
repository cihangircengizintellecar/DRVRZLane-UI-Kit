import React from 'react';
import { storiesOf } from '@kadira/storybook';

import VehicleInformationCard from './VehicleInformationCard';
import lexusLogoImage from './lexus-logo.png';

storiesOf('VehicleInformationCard', module)
  .add('can be clicked', () => (
    <VehicleInformationCard
      manufacturerLogo={lexusLogoImage}
      year="2017"
      name="Lexus RX 350"
      color="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      condition="Used"
      price={20017.55}
      mileage={20200}
    />
  ))
  .add('can not include price and mileage', () => (
    <VehicleInformationCard
      manufacturerLogo={lexusLogoImage}
      year="2017"
      name="Lexus RX 350"
      color="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
      condition="Used"
    />
  ));
