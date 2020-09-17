import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

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
