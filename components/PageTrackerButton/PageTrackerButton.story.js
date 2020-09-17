import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

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
