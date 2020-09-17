import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';
import RateTable from './RateTable';

storiesOf('RateTable', module)
  .add('displays properly', () => (
    <RateTable
      rates={[
        {
          term: 72,
          scoreRangeUpper: 0,
          scoreRangeLower: 300,
          apr: 11.7
        },
        {
          term: 72,
          scoreRangeUpper: 501,
          scoreRangeLower: 700,
          apr: 5.6
        },
        {
          term: 72,
          scoreRangeUpper: 301,
          scoreRangeLower: 500,
          apr: 8.7
        },
        {
          term: 72,
          scoreRangeUpper: 701,
          scoreRangeLower: 720,
          apr: 3.5
        },
        {
          term: 36,
          scoreRangeUpper: 0,
          scoreRangeLower: 300,
          apr: 9.7
        },
        {
          term: 36,
          scoreRangeUpper: 301,
          scoreRangeLower: 500,
          apr: 5.7
        },
        {
          term: 36,
          scoreRangeUpper: 501,
          scoreRangeLower: 700,
          apr: 4.6
        },
        {
          term: 36,
          scoreRangeUpper: 701,
          scoreRangeLower: 720,
          apr: 2.5
        }
      ]}
    />
  ))