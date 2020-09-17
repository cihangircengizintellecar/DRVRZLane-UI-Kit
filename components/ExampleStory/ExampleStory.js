import PropTypes from 'prop-types';
import React from 'react';
import classes from './ExampleStory.scss';

export const ExampleStory = (props) => {
  return (
    <h1 className={classes.main}>{props.children}</h1>
  );
};

ExampleStory.propTypes = {
  children: PropTypes.node
};

export default ExampleStory;