import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import ExpandButton from './ExpandButton';

storiesOf('ExpandButton', module)
  .add('has options', () => (
    <ExpandButton onClick={this.onExpandOfferRow} />
  ));
