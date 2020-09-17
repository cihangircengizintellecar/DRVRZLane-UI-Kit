import React, { PropTypes } from 'react';

import classes from './LoadingIcon.scss';

const LoadingIcon = function (props) {
  return (
    (props.show === true) &&
    <div className={classes.LoadingOverlay}>
      <div className={classes.wrapper}>
        <h2>Loading...</h2>
        <div className={classes.LoadingBackground}>
          <div className={classes.Divider} />
          <div className={classes.Divider} />
          <div className={classes.Divider} />
          <div className={classes.Divider} />
          <div className={classes.LoadingColor} />
        </div>
      </div>
    </div>
  );
};

LoadingIcon.propTypes = {
  show: PropTypes.bool
};

export default LoadingIcon;
