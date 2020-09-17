import PropTypes from 'prop-types';
import React from 'react';
import classes from './TableElements.scss';

import sortArrowImage from './arrow.svg';

const noop = () => {};

export const TableHeaderCell = ({
  classNames,
  label,
  sortByKey,
  isCurrentSortBy,
  onClick = noop,
  sortDirection
}) => {
  const clickToSort = () => {
    let newSortDir;

    if (sortDirection === 'desc') {
      newSortDir = 'asc';
    } else {
      newSortDir = 'desc';
    }

    onClick({
      sortByKey,
      sortDirection: newSortDir
    });
  };

  const headerClassNames = ['TableHeaderCell', onClick !== noop ? `${classes.sortable}` : ''];

  if (classNames) {
    classNames.forEach((c) => {
      headerClassNames.push(c);
    });
  }

  return (
    <th className={headerClassNames.map((c) => classes[c] || c).join(' ')} onClick={clickToSort}>
      {label.toUpperCase()}

      {(onClick !== noop) && isCurrentSortBy &&
        <img src={sortArrowImage} className={classes[sortDirection]} />
      }
    </th>
  );
};

TableHeaderCell.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  onClick: PropTypes.func,
  sortDirection: PropTypes.string,
  sortByKey: PropTypes.string,
  isCurrentSortBy: PropTypes.bool
};

export default TableHeaderCell;