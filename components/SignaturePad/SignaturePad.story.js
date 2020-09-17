import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SignaturePad from './SignaturePad';

storiesOf('React Signature', module)
  .add('React Signature', () => (
    <SignaturePad onSaveSignature={action('save signature')} />
  ));
