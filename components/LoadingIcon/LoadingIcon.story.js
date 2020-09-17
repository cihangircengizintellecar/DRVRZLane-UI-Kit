import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingIcon from './LoadingIcon';

storiesOf('LoadingIcon', module)
  .add('default', () => (
    <LoadingIcon show={true} />
  ));
