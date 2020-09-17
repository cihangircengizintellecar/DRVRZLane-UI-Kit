import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import RadioButtonGroup from './RadioButtonGroup';

storiesOf('Radio Button', module)
  .add('string values', () => (
    <div>
      <h2>Do you like my hat?</h2>
      <p>
        <RadioButtonGroup
          options={[
            'Yes',
            'No',
            'I Do Not Believe In Hats'
          ]}
          recordField="RadioGroup1"
          onChange={action('onChange')}
        />
      </p>
    </div>
  ))
  .add('object values', () => (
    <div>
      <h2>Do you like my hat?</h2>
      <p>
        <RadioButtonGroup
          options={
          [{
            displayValue: 'Yes',
            value: 'yes',
            tabIndex: '1'
          },
          {
            displayValue: 'No',
            value: 'no',
            tabIndex: '2'
          },
          {
            displayValue: 'I Do Not Believe In Hats',
            value: 'nonBeliever',
            tabIndex: '3'
          }]
          }
          recordField="RadioGroup1"
          onChange={action('onChange')}
        />
      </p>
    </div>
  ));
