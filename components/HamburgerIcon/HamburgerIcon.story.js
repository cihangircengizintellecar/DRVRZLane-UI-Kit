import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';

import HamburgerIcon from './HamburgerIcon';

storiesOf('HamburgerIcon', module)
  .add('can be clicked', () => (
    <HamburgerIcon
      onClick={action('HamburgerIcon has been clicked')}
    />
  ));
