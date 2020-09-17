import React from 'react';
import classes from './ExampleStory.scss';

export const ExampleStory = (props) => {
  return (
    <h1 className={classes.main}>{props.children}</h1>
  );
};

ExampleStory.propTypes = {
  children: React.PropTypes.node
};

export default ExampleStory;
