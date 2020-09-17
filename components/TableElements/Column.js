import React, { PropTypes } from 'react';
import classes from './TableElements.scss';

export const Column = (props) => {
  const columnClassNames = ['TableColumn', (props.hideOnMobile === true ? 'hideOnMobile' : '')];

  if (props.classNames) {
    props.classNames.forEach(c => {
      columnClassNames.push(c);
    });
  }

  return (
    <td style={props.style} className={columnClassNames.map((c) => classes[c] || c).join(' ')}>{props.children}</td>
  );
};

Column.propTypes = {
  children: PropTypes.node,
  hideOnMobile: PropTypes.bool,
  style: PropTypes.shape({}),
  classNames: PropTypes.arrayOf(PropTypes.string)
};

export default Column;
