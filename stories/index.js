import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';

import '../styles/fastlane-ui.scss';

import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

const storiesContext = require.context('../components/', true, /\.story.js$/);
storiesContext.keys().forEach(storiesContext);
