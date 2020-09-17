import PropTypes from 'prop-types';
import React from 'react';

const Image = function (props) {
  return (<img {...props.attributes} src={props.source} className={props.className} />);
};

Image.propTypes = {
  source: PropTypes.string,
  className: PropTypes.string,
  attributes: PropTypes.shape({})
};

export default Image;