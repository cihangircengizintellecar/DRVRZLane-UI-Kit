import React, { PropTypes } from 'react';
import classes from './ModalTemplates.scss';

export const ProductVideos = ({
  video
}) => (
  <div className={classes.ProductVideosModal}>
    <iframe width="500" height="300" src={video} frameBorder="0" allowFullScreen />
  </div>
);

ProductVideos.propTypes = {
  video: PropTypes.string
};

export default ProductVideos;
