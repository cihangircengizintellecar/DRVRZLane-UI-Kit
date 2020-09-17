import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FinancingInformation from './FinancingInformation';

storiesOf('FinancingInformation', module)
  .add('can be clicked', () => (
    <FinancingInformation
      headerText="Fastlane Financing Information"
      downPayment="5,812.37"
      monthlyPayment="436.15"
      leaseTerm="60"
      apr="3.9"
    />
  ));
