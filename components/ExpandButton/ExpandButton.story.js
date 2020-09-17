import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';

import ExpandButton from './ExpandButton';

storiesOf('ExpandButton', module)
  .add('has options', () => (
    <ExpandButton onClick={this.onExpandOfferRow} />
  ));
