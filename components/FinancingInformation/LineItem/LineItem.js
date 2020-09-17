import React, { PropTypes } from 'react';
import classes from './LineItem.scss';

const LineItem = ({ name, value, infoType }) => {
// TODO: make the discounts show up in red text with a - sign next to them. I got tired of trying to deconstruct this logic to add a third case. Mondays...
  return (
    <div className={classes.lineItem}>
      <span>{name}</span>

      {name === 'Lease Term' &&
        <span>
          {value} Months
        </span>
      }

      {name === 'APR' ?
        <span>
          {value}%
        </span>
        :
        <span>
          {value}
        </span>
      }
    </div>
  );
};

LineItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  infoType: PropTypes.string,
  adjustment: PropTypes.string
};

export default LineItem;
