import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StepTracker from './StepTracker';

const steps = [
  { name: 'Customer Information', route: 'customer-information' },
  { name: 'Trade In', route: 'trade-in' },
  { name: 'Warranties & Add-Ons', route: 'warranties-add-ons' },
  { name: 'Financing', route: 'leasing-or-buying' },
  { name: 'Final Summary', route: 'final-summary' },
  { name: 'Closing Documents', route: 'closing-documents' }
];

storiesOf('StepTracker', module)
  .add('can have a selected step', () => (
    <StepTracker
      steps={steps}
      currentStep={0}
      isLease={false}
    />
  ))
  .add('can have completed steps', () => (
    <StepTracker
      steps={steps}
      currentStep={5}
      isLease={false}
    />
  ))
  .add('warranties and addons are disabled when leasing', () => (
    <StepTracker
      steps={steps}
      currentStep={4}
      isLease={true}
    />
  ));
