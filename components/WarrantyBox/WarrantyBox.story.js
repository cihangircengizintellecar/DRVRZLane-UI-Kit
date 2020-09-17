import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';

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
