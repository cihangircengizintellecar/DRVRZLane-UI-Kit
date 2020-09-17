import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import path from 'path';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
