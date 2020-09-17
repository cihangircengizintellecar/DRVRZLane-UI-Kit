import React from 'react';
import { storiesOf } from '@kadira/storybook';

import LoadingIcon from './LoadingIcon';

storiesOf('LoadingIcon', module)
  .add('default', () => (
    <LoadingIcon show={true} />
  ));
