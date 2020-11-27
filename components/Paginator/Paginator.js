import PropTypes from 'prop-types';
import React from 'react';
import classes from './Paginator.scss';

import arrowImage from './arrow.svg';

const clickNext = (props) => () => {
  if (((props.current + 1) * props.pageSize) < props.total) {
    props.onPageChanged('next');
  }
};

const clickBack = (props) => () => {
  if (props.current !== 0) {
    props.onPageChanged('back');
  }
};

const Paginator = (props) => {
  const pageRange = props.total !== 0 ? ((props.current + 1) - 1) * props.pageSize + 1 : 0;
  const pageRangeTotal = ((props.total - props.pageSize) < (props.pageSize * props.current)) ? props.total : pageRange + props.pageSize - 1;

  const backButtonClassNames = ['PaginatorButton', (props.current === 0 ? 'disabled' : '')];
  const nextButtonClassNames = ['PaginatorButton', (((props.current + 1) * props.pageSize) >= props.total ? 'disabled' : '')];

  const hasPaging = !(pageRangeTotal == props.total && props.pageSize > props.total);
  return (
    <div className={classes.Paginator}>
      <span className={classes.PaginatorText}>{pageRange}-{pageRangeTotal} of {props.total}</span>
      { hasPaging &&
        <button className={backButtonClassNames.map((c) => classes[c] || c).join(' ')} onClick={clickBack(props)}>
          <img src={arrowImage} name="back" />
        </button>
      }
      {hasPaging && 
        <button className={nextButtonClassNames.map((c) => classes[c] || c).join(' ')} onClick={clickNext(props)}>
          <img src={arrowImage} name="next" />
        </button>
      }
    </div>
  );
};

Paginator.propTypes = {
  current: PropTypes.number, // current page
  pageSize: PropTypes.number,
  total: PropTypes.number, // total number of elements (totalElements - not total pages)
  onPageChanged: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default Paginator;