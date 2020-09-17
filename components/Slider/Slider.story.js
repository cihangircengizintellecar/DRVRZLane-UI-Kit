import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from './Slider';


storiesOf('Slider', module)
  .add('slides with grace', () => {
    const min = 0;
    const max = 100;
    const step = 5;
    let value = 30;

    function onChange (val) {
      value = val;
    }

    return (
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        label={`${value} Widgets`}
        onChange={onChange}
      />
    );
  });
