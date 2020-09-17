import PropTypes from 'prop-types';
import React from 'react';
import Row from '../TableElements/Row';
import Column from '../TableElements/Column';
import classes from './OfferRow.scss';
import clEM from './OfferEMRow.scss';
import Button from '../Button';

const AddFeeRow = (props) => {
  return (
    <Row>
      <Column>
        <div className={classes.OfferName}><h5 id="name">{props.name}</h5></div>
      </Column>

      <Column>
        <div className={`${clEM.OfferEMName} ${classes.OfferValue}`}><h5 id="price">{props.price}</h5></div>
      </Column>

      <Column>
        <div className={clEM.OfferEMButton}>
          <Button
            label="Archive"
            theme="light"
            size="small"
            onClick={props.onArchive}
          />
        </div>
      </Column>
    </Row>
  );
};

AddFeeRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  onArchive: PropTypes.func
};

export default AddFeeRow;