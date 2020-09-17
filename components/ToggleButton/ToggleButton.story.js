import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import ToggleButton from './ToggleButton';

const toggleOptions = ['Open', 'History']
let optionSelected = toggleOptions[0];

storiesOf('ToggleButton', module)
  .add('toggle button', () => (
    <ToggleButton
      toggleOptions={toggleOptions}
      onChange={action('clickOption')}
      selection={optionSelected}
    />
  ));
