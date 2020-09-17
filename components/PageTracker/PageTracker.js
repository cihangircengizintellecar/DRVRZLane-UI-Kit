import PropTypes from 'prop-types';
import React from 'react';
import PageTrackerButton from '../PageTrackerButton';

export const PageTracker = (props) => {
  const pages = [];

  for (let i = 1; i < props.totalPages + 1; i++) {
    pages.push(<PageTrackerButton key={i} onClick={props.onClick} label={i} isActive={(props.currentPage === i) ? true : false} />);
  }

  return (
    <div>
      {pages}
    </div>
  );
};

PageTracker.propTypes = {
  children: PropTypes.node,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onClick: PropTypes.func
};

export default PageTracker;