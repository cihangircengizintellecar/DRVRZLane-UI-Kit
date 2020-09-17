import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CombinedFinancingTerms from './CombinedFinancingTerms';

storiesOf('CombinedFinancingTerms', module)
  .add('', () => (
    <CombinedFinancingTerms
      monthlyPay="300.25"
      leasingMonthlyPay="280.34"
      terms="72"
    />
  ));
