import React from 'react';
import { storiesOf } from '@storybook/react';

import TradeInInformation from './TradeInInformation';
import lexusLogoImage from './lexus-logo.png';

storiesOf('TradeInInformation', module)
  .add('can be clicked', () => (
    <TradeInInformation
      manufacturerLogo={lexusLogoImage}
      name="2017 Lexus RX 350"
      color="Nebula Gray Pearl"
      vin="1HGBH41JXMN109186"
    />
  ));
