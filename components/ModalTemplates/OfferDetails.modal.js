import React, { PropTypes } from 'react';
import classes from './ModalTemplates.scss';

import parseURLs from '../../helpers/parseURLs';

export const OfferDetails = ({
  title,
  message
}) => (
  <div className={classes.OfferDetailsModal}>
    <div className={classes.OfferDetailsModalHeader}>
      {title}
    </div>
    <div className={classes.OfferDetailsModalMessage}>
      <p dangerouslySetInnerHTML={{ __html: parseURLs(message) }} />
    </div>
  </div>
);

OfferDetails.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

export default OfferDetails;
