import PropTypes from 'prop-types';
import React from 'react';
import classes from './ModalTemplates.scss';
import checkImage from './check.png';

export const SuccessWide = ({
  header,
  message
}) => (
  <div className={classes.SuccessWideModal}>
    <div className={classes.SuccessWideModalHeader}>
      <img src={checkImage} className={classes.checkImage} />
      <h1>{header}</h1>
    </div>

    <div className={classes.SuccessWideModalMessage}>
      <p>{message}</p>
    </div>
  </div>
);

SuccessWide.propTypes = {
  header: PropTypes.string,
  message: PropTypes.string
};

export default SuccessWide;