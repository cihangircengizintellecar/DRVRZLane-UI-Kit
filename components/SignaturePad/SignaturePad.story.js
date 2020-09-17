import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';
import SignaturePad from './SignaturePad';

storiesOf('React Signature', module)
  .add('React Signature', () => (
    <SignaturePad onSaveSignature={action('save signature')} />
  ));
