import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import WarrantyBox from './WarrantyBox';

storiesOf('WarrantyBox', module)
  .add('has options', () => (
    <WarrantyBox
      package="A"
      name="Roadside Assistance"
      description="2 Years / 25,000 Miles"
      value="1,000"
      isSelected={true}
      readOnly={true}
      toggleSelect={action('toggle select warranty')}
    />
  ));
