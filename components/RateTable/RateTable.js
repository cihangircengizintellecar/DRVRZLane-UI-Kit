import PropTypes from 'prop-types';
import React from 'react';
import classes from './RateTable.scss';

const RateTableRow = ({ columns, onCellClick }) => {
  const onClick = (dealershipRateId) => () => {
    onCellClick(dealershipRateId);
  };

  return (
    <div className={classes.Row}>
      {columns.map((column) => (
        <div onClick={Array.isArray(column) ? onClick(column[1]) : () => {}}>{Array.isArray(column) ? column[0] : column}</div>
      ))}
    </div>
  );
};

/*
[
  {
    apr, term, scoreRangeUpper, scoreRangeLower
  }
] =>
[
  term,
  apr,
  apr,
  apr,
  apr
]

*/
const RateTable = ({ rates, onCellClick }) => {
  const ranges = {};
  const rangeColumns = {};
  const sortedRates = rates.sort((rate1, rate2) => rate1.term > rate2.term);

  sortedRates.forEach((rate) => {
    const key = `${rate.scoreRangeLower}-${rate.scoreRangeUpper}`;
    if (!ranges[rate.term]) {
      ranges[rate.term] = {};
    }

    rangeColumns[key] = {
      lower: rate.scoreRangeLower,
      upper: rate.scoreRangeUpper
    };

    ranges[rate.term][key] = [rate.apr, rate.dealershipRateId];
  });

  const rows = Object.keys(ranges).map((term) => {
    const sortedKeys = Object.keys(ranges[term]).sort((key1, key2) => key2 < key1);
    let arr = [
      term
    ];

    sortedKeys.forEach((key) => {
      arr = arr.concat([ranges[term][key]]);
    });

    return arr;
  });

  const sortedRangeColumns = Object.keys(rangeColumns).sort((key1, key2) => key2 < key1);

  return (
    <div className={classes.Table}>
      <div className={`${classes.Row} ${classes.RowHeader}`}>
        <div>Term</div>
        {sortedRangeColumns.map((range) => (<div>{range}</div>))}
      </div>
      {rows.map((row) => (<RateTableRow columns={row} onCellClick={onCellClick} />))}
    </div>
  );
};

export default RateTable;