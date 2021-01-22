import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Row from '../TableElements/Row';
import Column from '../TableElements/Column';
import ExpandButton from '../ExpandButton';
import classes from './OfferRow.scss';
import clEM from './OfferEMRow.scss';
import clEMAO from './AddOnEMRow.scss';
import Button from '../Button';

class AddOnEMRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  onSelectOfferRow = () => {
    if (this.state.isSelected) {
      this.setState({ isSelected: false });
      this.props.onSelect(false, this.props);
    } else {
      this.setState({ isSelected: true });
      this.props.onSelect(true, this.props);
    }
  }

  onExpandOfferRow = () => {
    if (this.state.isExpanded) {
      this.setState({ isExpanded: false });
      this.props.onExpand(false, this.props.name, this.props.requirements);
    } else {
      this.setState({ isExpanded: true });
      this.props.onExpand(true, this.props.name, this.props.requirements);
    }
  }

  render() {
    let formattedRowValue = '';
    if (this.props.value) {
      formattedRowValue = `${this.props.value.toLocaleString()}`;
    }

    let formattedRequirements = '';
    if (this.props.requirements) {
      if (this.props.requirements.length > 60) {
        formattedRequirements = `${this.props.requirements.substring(0, 60)}...`;
      } else {
        formattedRequirements = this.props.requirements;
      }
    }

    return (
      <Row className={`${(this.props.readOnly && classes.isDisabled)}`} rowType="OfferRow">
        <Column classNames={[clEMAO.Column, clEMAO.ImageColumn]}>
          <div className={clEMAO.AddOnImage}>
            <img src={this.props.image} />
          </div>
        </Column>

        <Column classNames={[clEMAO.Column]}>
          <div className={classes.OfferName}>
            <div className={this.props.readOnly && classes.isDisabled}>
              <h5>{this.props.name}</h5>
              <div className={`${classes.OfferValue}`}>
                {formattedRowValue}
              </div>
            </div>
          </div>
        </Column>

        <Column hideOnMobile classNames={[clEMAO.Column]}>
          <div className={`${clEM.OfferEMRequirements} ${clEM.OfferEMName} `}>
            {this.props.brochureUrl && <a href={this.props.brochureUrl}>Download Video/Info</a>}
          </div>
        </Column>

        <Column hideOnMobile classNames={[clEMAO.Column]}>
          <div className={`${clEM.OfferEMRequirements} ${clEM.OfferEMName} `}>
            <span className={this.props.readOnly ? classes.isDisabled : ''}>
              {formattedRequirements}
            </span>
          </div>
        </Column>

        <Column>
          <ExpandButton onClick={this.onExpandOfferRow} />
        </Column>

        <Column>
          <Button
            label="Archive"
            theme="light"
            size="medium"
            onClick={this.props.onArchive}
            disabled={this.props.readOnly}
          />
        </Column>
        <Column>
          <Button
            label="Edit"
            theme="light"
            size="medium"
            onClick={this.props.onEdit}
            disabled={this.props.readOnly}
          />
        </Column>
      </Row>
    );
  }
}

AddOnEMRow.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  brochureUrl: PropTypes.string,
  requirements: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  onSelect: PropTypes.func,
  onExpand: PropTypes.func,
  onArchive: PropTypes.func,
  onEdit: PropTypes.func,
  children: PropTypes.node
};

export default AddOnEMRow;