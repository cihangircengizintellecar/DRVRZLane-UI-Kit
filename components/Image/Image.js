import React from 'react';

const Image = function (props) {
  return (<img {...props.attributes} src={props.source} className={props.className} />);
};

Image.propTypes = {
  source: React.PropTypes.string,
  className: React.PropTypes.string,
  attributes: React.PropTypes.shape({})
};

export default Image;
