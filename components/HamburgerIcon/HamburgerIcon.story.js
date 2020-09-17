import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import HamburgerIcon from './HamburgerIcon';

storiesOf('HamburgerIcon', module)
  .add('can be clicked', () => (
    <HamburgerIcon
      onClick={action('HamburgerIcon has been clicked')}
    />
  ));
