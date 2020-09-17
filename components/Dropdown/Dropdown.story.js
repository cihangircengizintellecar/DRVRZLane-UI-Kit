import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown';

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' }
];

const selectedOption = 2;

const validationErrors = [];

const isValid = (newVal) => {
  if (newVal && newVal !== 2) {
    validationErrors.splice(0, validationErrors.length);
    validationErrors.push('Error');
    return false;
  }

  if (newVal === '' || newVal === null) {
    validationErrors.splice(0, validationErrors.length);
    return true;
  }

  for (let i = validationErrors.length; i > 0; i--) {
    validationErrors.pop();
  }

  return true;
};

storiesOf('Dropdown', module)
  .add('has options', () => (
    <Dropdown
      label="Options"
      options={options}
      validationErrors={validationErrors}
      validateFunction={isValid}
      onChange={action('dropdownChange')}
      selectedValue={selectedOption}
      dropdownAttrs={{ name: 'options' }}
    />
  ));
