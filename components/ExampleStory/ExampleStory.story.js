import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ExampleStory from './ExampleStory';

storiesOf('Example Story', module)
  .add('with subtitle', () => (
    <ExampleStory>Hello Everyone!</ExampleStory>
  ));
