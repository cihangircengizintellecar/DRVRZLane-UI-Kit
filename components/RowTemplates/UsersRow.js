import React, { PropTypes } from 'react';
import classes from './OfferRow.scss';
import clEM from './OfferEMRow.scss';
import Row from '../TableElements/Row';
import Column from '../TableElements/Column';
import Button from '../Button';

export const UsersRow = (props) => {

  return (
    <Row>
      <Column>
        <div className={classes.OfferName}>
          <h5 id="name">{props.name}</h5>
        </div>
      </Column>

      <Column>
        <div className={`${clEM.OfferEMName} ${classes.OfferValue}`}>
          <h5>{props.email}</h5>
        </div>
      </Column>

      <Column>
        <div className={classes.OfferValue}>
          <h5>{props.lastLogIn}</h5>
        </div>
      </Column>

      <Column>
        <div className={clEM.OfferEMButton}>
          <Button
            label={props.archiveText || 'Disable'}
            theme="light"
            size="small"
            onClick={props.onArchive}
          />
        </div>
      </Column>

      <Column>
        <div className={clEM.OfferEMButton}>
          <Button
            label={props.archiveText || 'Change Password'}
            theme="light"
            size="small"
            onClick={props.onChangePassword}
          />
        </div>
      </Column>
    </Row>
  );
};

UsersRow.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  lastLogIn: PropTypes.string,
  archiveText: PropTypes.string,
  onArchive: PropTypes.func,
  onChangePassword: PropTypes.func
};

export default UsersRow;
