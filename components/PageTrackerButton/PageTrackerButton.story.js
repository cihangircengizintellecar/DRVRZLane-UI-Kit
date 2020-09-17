import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';

import PageTrackerButton from './PageTrackerButton';

storiesOf('PageTrackerButton', module)
  .add('can be inactive', () => (
    <PageTrackerButton
      label={1}
    />
  ))
  .add('can be active', () => (
    <PageTrackerButton
      label={1}
      isActive
    />
  ));
