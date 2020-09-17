import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Paginator from './Paginator';

let current = 0;

const pageClicked = function (newVal) {
  current = newVal;
};

storiesOf('Paginator', module)
  .add('default', () => (
    <Paginator
      current={current}
      total={100}
      pageSize={25}
      onPageChanged={pageClicked}
    />
  ));
