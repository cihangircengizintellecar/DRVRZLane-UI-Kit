import React from 'react';
import classes from './PageTrackerButton.scss';

export const PageTrackerButton = (props) => {
  const classNames = ['button', `${props.isActive === true ? 'current' : ''}`];

  return (
    <button
      className={classNames.map((c) => classes[c]).join(' ')}
    >
      {props.label}
    </button>
  );
};

PageTrackerButton.propTypes = {
  children: React.PropTypes.node,
  label: React.PropTypes.string,
  isActive: React.PropTypes.bool
};

export default PageTrackerButton;
