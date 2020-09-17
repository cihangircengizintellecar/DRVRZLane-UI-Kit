import React, { PropTypes } from 'react';
import classes from './TableElements.scss';

export const Row = ({ children, emptyStateRow, emptyStateText = 'No Results', rowType, className }) => (
  <tr className={`${(['TableRow', (rowType === 'AddOnRow' ? 'AddOnRow' : 'OfferRow')]).map((c) => classes[c] || c).join(' ')} ${className}`}>
    {emptyStateRow
      ? <td>{emptyStateText}</td>
      : children
    }
  </tr>
);

Row.propTypes = {
  children: PropTypes.node,
  emptyStateRow: PropTypes.bool,
  emptyStateText: PropTypes.string
};

export default Row;
