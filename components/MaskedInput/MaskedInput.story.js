import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MaskedInput from './MaskedInput';

const validationErrors = [];

const isValid = (newVal) => {
  if (newVal && newVal !== 'fastlane') {
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

storiesOf('MaskedInput', module)
  .add('is a masked input field that acts like Input', () => (
    <MaskedInput
      label="Social Security Number"
      inputAttrs={{ name: 'VIN' }}
      disabled={false}
      placeholder="555-55-5555"
      mask="999-99-9999"
      maskChar="_"
      value=""
      acceptableValueCharacters={/[0-9]/g}
      validationErrors={validationErrors}
      validateFunction={isValid}
      onChange={action('inputChange')}
      onBlur={action('inputBlur')}
      onFocus={action('inputFocus')}
      onKeyUp={action('inputKeyUp')}
      onKeyDown={action('inputKeyDown')}
    />
  ))
  .add('can have all kinds of masks!', () => (
    <MaskedInput
      label="Phone Number"
      inputAttrs={{ name: 'VIN' }}
      disabled={false}
      placeholder="(555) 555-5555"
      mask="(999) 999-9999"
      maskChar="5"
      acceptableValueCharacters={/[0-9]/g}
      validationErrors={validationErrors}
      validateFunction={isValid}
      onChange={action('inputChange')}
      onBlur={action('inputBlur')}
      onFocus={action('inputFocus')}
      onKeyUp={action('inputKeyUp')}
      onKeyDown={action('inputKeyDown')}
    />
  ));
