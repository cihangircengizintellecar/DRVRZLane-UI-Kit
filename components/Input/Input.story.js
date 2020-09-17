import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Input from './Input';

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

storiesOf('Input', module)
  .add('is a basic text form field', () => (
    <Input
      label="First Name"
      inputAttrs={{ name: 'VIN' }}
      defaultValue={'inputValue'}
      placeholder="This is a form field"
      disabled={false}
      validationErrors={validationErrors}
      validateFunction={isValid}
      onChange={action('inputChange')}
      onBlur={action('inputBlur')}
      onFocus={action('inputFocus')}
      onKeyUp={action('inputKeyUp')}
      onKeyDown={action('inputKeyDown')}
    />
  ))
  .add('can have defaults', () => (
    <Input
      label="First Name"
      inputAttrs={{ name: 'VIN' }}
      placeholder="This is an input"
      value={'This is a value.'}
      disabled={false}
      validationErrors={validationErrors}
      validateFunction={isValid}
      onChange={action('inputChange')}
      onBlur={action('inputBlur')}
      onFocus={action('inputFocus')}
      onKeyUp={action('inputKeyUp')}
      onKeyDown={action('inputKeyDown')}
    />
  ))
  .add('read only', () => (
    <Input
      readOnly
      label="First Name"
      value={'This is a value.'}
    />
  )).add('large', () => (
    <Input
      size="large"
      label="The Coolest Story"
      defaultValue={"It's a fair bet the Alliance knows about Mr. Universe. They're gonna see this coming. Capt. Malcolm Reynolds: No. They're not going to see this coming. Capt. Malcolm Reynolds: Come a day there won't be room for naughty men like us to slip about at all. This job goes south, there well may not be another. So here is us, on the raggedy edge. Don't push me, and I won't push you. Dong le ma? Shepherd Book: It's not your way, Mal. Capt. Malcolm Reynolds: I have a way? Is that better than a plan? Dr. Simon Tam: [referring to River] One simple job. She'll be fine. Capt. Malcolm Reynolds: She is fine! Except for still being crazy! She's the picture of health. Shepherd Book: It's not your way, Mal. Capt. Malcolm Reynolds: I have a way? Is that better than a plan? The Operative: Secrets are not my concern. Keeping them is. Shepherd Book: I don't care what you believe in, just believe in it. The Operative: Yes, have you found the nav sat trajectory? Ensign: Sir, we found seven. Capt. Malcolm Reynolds: Do you want to run this ship? Jayne Cobb: Yes! Capt. Malcolm Reynolds: [caught off guard] Well... you can't... Capt. Malcolm Reynolds: Ready to get off this heap, back to civilized life? Inara Serra: I, uh... I don't know. Capt. Malcolm Reynolds: Good answer. Capt. Malcolm Reynolds: You had a gorram time bomb living with us! Who we gonna find in there when she wakes up? The girl? Or the weapon? Dr. Simon Tam: I thought she was getting better. Jayne Cobb: And I thought they was getting off. Didn't we have an intricate plan on how they was gonna be not here any more? "}
    />
  ));
