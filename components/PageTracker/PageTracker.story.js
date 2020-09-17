import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

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
