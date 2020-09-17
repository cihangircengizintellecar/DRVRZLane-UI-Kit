import PropTypes from 'prop-types';
import React from 'react';
import Row from '../TableElements/Row';
import Column from '../TableElements/Column';
import classes from './DealershipRow.scss';
import Button from '../Button';

const navigateToSingleDealership = (props) => () => {
  props.onClickNavigate(props.id);
};

const masqueradeAsDealer = (props) => () => {
  props.onClickMasquerade(props.id);
};

const tdNormalize = {
  padding: '40px 15px 40px 40px'
};

const DealershipRow = (props) => (
  <Row rowType="DealershipRow" className={classes.DealershipRow}>
    <Column style={tdNormalize}>
      <div data-hook="rowName">
        {props.name}
      </div>
    </Column>
    <Column style={tdNormalize}>
      <div data-hook="rowFranchise">
        {props.franchise}
      </div>
    </Column>
    <Column style={tdNormalize}>
      <div data-hook="rowContact">
        {props.contactPhone}
      </div>
    </Column>
    <Column style={tdNormalize}>
      <div data-hook="rowLocation">
        {props.location}
      </div>
    </Column>
    <Column style={tdNormalize}>
      <Button
        label="Mask"
        size="normal"
        type="dark"
        theme="success"
        onClick={masqueradeAsDealer(props)}
      />
    </Column>
    <Column style={{ padding: '0', cursor: 'pointer' }}>
      <div onClick={navigateToSingleDealership(props)} style={tdNormalize}>
        >
      </div>
    </Column>
  </Row>
);

DealershipRow.propTypes = {
  name: PropTypes.string,
  franchise: PropTypes.string,
  contactPhone: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string,
  onClickNavigate: PropTypes.func
};

export default DealershipRow;