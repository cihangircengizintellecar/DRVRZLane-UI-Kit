import PropTypes from 'prop-types';
import React from 'react';
import classes from './PurchaseLineItem.scss';
import formatCurrency from '../../helpers/FormatCurrency';
import makeNegative from '../../helpers/MakeNegative';
import Input from '../Input/Input';

const PurchaseLineItem = ({ name, value, positive, isEdit = false, onChange }) => {
  const isATotal = (name === 'Total*' || name === 'Total Loan Amount*' || name === 'Total Monthly Payment*');
  const purchaseLineItemClasses = ['purchaseLineItem', (isATotal ? 'total' : '')];
  let formattedValue = '-';

  if (value !== null && value !== '' && value !== '-') {
    formattedValue = makeNegative(value, !positive);
    formattedValue = formatCurrency(formattedValue);
  }

  return (
    <div className={purchaseLineItemClasses.map((c) => classes[c] || c).join(' ')}>
      <span>{name}</span>

      {(value === 'Pending') ?
        <span className={classes.addOns}><h2>Pending</h2></span>
        :
        (isEdit) ? <Input theme="dealerPurchase" onChange={onChange} value={value} inputAttrs={{ name: name, type: 'number' }} validateFunction={() => { return true }} /> : <span>{formattedValue}</span>
      }

    </div>
  );
};

PurchaseLineItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  positive: PropTypes.bool,
  isEdit: PropTypes.bool,
  onChange: PropTypes.func
};

export default PurchaseLineItem;