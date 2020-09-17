import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ToggleButton from './ToggleButton';

const toggleOptions = ['Open', 'History'];
let optionSelected = toggleOptions[0];

storiesOf('ToggleButton', module)
  .add('toggle button', () => (
    <ToggleButton
      toggleOptions={toggleOptions}
      onChange={action('clickOption')}
      selection={optionSelected}
    />
  ));
