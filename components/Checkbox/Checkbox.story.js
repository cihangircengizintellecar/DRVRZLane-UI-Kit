import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .add('single checkbox', () => (
    <Checkbox
      id="1234"
      label="Add shrimp ($5.00)"
      isSelected={false}
      onSelect={action('handleChange')}
    />
  ));
