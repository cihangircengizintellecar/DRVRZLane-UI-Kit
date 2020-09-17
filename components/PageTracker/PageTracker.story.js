import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';

import PageTracker from './PageTracker';

storiesOf('PageTracker', module)
  .add('can exist with multiple steps', () => (
    <PageTracker
      totalPages={4}
    />
  ))
  .add('can have an active step', () => (
    <PageTracker
      totalPages={4}
      currentPage={2}
    />
  ));
