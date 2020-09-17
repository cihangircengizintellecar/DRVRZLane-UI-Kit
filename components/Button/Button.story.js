import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from './Button';
import lockImage from './lock.png';

storiesOf('Button', module)
  .add('small default success button', () => (
    <Button
      label="Click Me"
      type="default"
      size="small"
      theme="success"
      onClick={action('clicked')}
      className="an-additional-class"
      buttonAttrs={{
        type: 'button',
        name: 'click-me'
      }}
    />
  ))
  .add('normal default success button', () => (
    <Button
      label="Click Me"
      type="default"
      size="normal"
      theme="success"
      onClick={action('clicked')}
      className="an-additional-class"
      buttonAttrs={{
        type: 'button',
        name: 'click-me'
      }}
    />
  ))
  .add('small primary success button', () => (
    <Button
      label="Click Me"
      type="primary"
      size="small"
      theme="success"
      onClick={action('clicked')}
      className="an-additional-class"
      buttonAttrs={{
        type: 'button',
        name: 'click-me'
      }}
    />
  ))
  .add('normal primary success button', () => (
    <Button
      label="Click Me"
      type="primary"
      size="normal"
      theme="success"
      onClick={action('clicked')}
      className="an-additional-class"
      buttonAttrs={{
        type: 'button',
        name: 'click-me'
      }}
    />
  ))
  .add('small secondary success button', () => (
    <Button
      label="Click Me"
      type="secondary"
      size="large"
      theme="success"
      onClick={action('clicked')}
      className="an-additional-class"
      buttonAttrs={{
        type: 'button',
        name: 'click-me'
      }}
    />
  ))
  .add('inverted dark standard', () => (
    <Button
      label="Click Me"
      type="secondary"
      size="large"
      theme="inverted__dark__standard"
      onClick={action('clicked')}
      className="an-additional-class"
      buttonAttrs={{
        type: 'button',
        name: 'click-me'
      }}
    />
  ))
  .add('inverted dark', () => (
    <Button
      label="Click Me"
      type="secondary"
      size="large"
      theme="inverted__dark"
      onClick={action('clicked')}
      className="an-additional-class"
      buttonAttrs={{
        type: 'button',
        name: 'click-me'
      }}
    />
  ))
  .add('medium light', () => (
    <Button
      label="Archive"
      size="medium"
      theme="light"
      onClick={action('clicked')}
      className="an-additional-class"
      buttonAttrs={{
        type: 'button',
        name: 'click-me'
      }}
    />
  ))
  .add('with icon', () => (
    <Button
      label="Archive"
      icon={lockImage}
      type="secondary"
      size="large"
      theme="success"
      onClick={action('clicked')}
      className="an-additional-class"
      buttonAttrs={{
        type: 'button',
        name: 'click-me'
      }}
    />
  ));
