import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Row from '../TableElements/Row';
import Column from '../TableElements/Column';
import ExpandButton from '../ExpandButton';
import classes from './AddOnRow.scss';
import checkmarkImage from './checkmark.png';
import formatCurrency from '../../helpers/FormatCurrency';

class AddOnRow extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isSelected: false,
      isExpanded: false,
      readOnly: false
    };
  }

  componentWillMount () {
    if (this.props.isSelected) {
      this.setState({
        isSelected: true
      });
    } else {
      this.setState({
        isSelected: false
      });
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isSelected !== this.props.isSelected) {
      if (nextProps.isSelected) {
        this.setState({
          isSelected: true
        });
      } else {
        this.setState({
          isSelected: false
        });
      }
    }
  }

  onSelectAddOnRow = () => {
    if (this.state.readOnly === false) {
      if (this.state.isSelected === true) {
        this.setState({ isSelected: false });
        this.props.onSelect(false, this.props);
      } else {
        this.setState({ isSelected: true });
        this.props.onSelect(true, this.props);
      }
    }
  }

  onExpandAddOnRow = () => {
    if (this.state.readOnly === false) {
      if (this.state.isExpanded === true) {
        this.setState({ isExpanded: false });
        this.props.onExpand(false, this.props);
      } else {
        this.setState({ isExpanded: true });
        this.props.onExpand(true, this.props);
      }
    }
  }

  render () {
    let formattedDescription = '';

    if (this.props.description && this.props.description.length > 60) {
      formattedDescription = `${this.props.description.substring(0, 60)}...`;
    } else {
      formattedDescription = this.props.description;
    }

    return (
      <Row rowType="AddOnRow">
        <Column>
          <div className={classes.addOnRowCheckboxWrapper}>
            <div>
              <div className={classes.addOnRowCheckbox} onClick={this.onSelectAddOnRow}>
                {this.state.isSelected &&
                  <img src={checkmarkImage} />
                }
              </div>
            </div>
          </div>
        </Column>

        <Column classNames={[classes.imageColumn]}>
          <img src={this.props.image} hidden={!this.props.image} className={classes.image} />
        </Column>

        <Column classNames={[classes.addOnColumn, classes.addOnTitle]}>
          <div className={classes.addOnRowTitle}>
            <h5>{this.props.title}</h5>
            <div className={`${classes.addOnRowValue} ${classes.showOnMobile}`}>
              {this.props.price &&
                <span>{formatCurrency(this.props.price)}* / month</span>
              }
            </div>
          </div>
        </Column>

        <Column classNames={[classes.addOnColumn]}>
          <div className={classes.addOnRowValue}>
            {this.props.price ?
              <div>
                <div><span>{formatCurrency(this.props.price)}*</span></div>
                <div><span className={classes.perMonth}>a month</span></div>
              </div>
              :
              <span>See dealership for details.</span>
            }
          </div>
        </Column>

        <Column classNames={[classes.addOnColumn]}>
          <div className={classes.addOnRowDescription}>
            {this.props.description ?
              formattedDescription
              :
              ' '
            }
          </div>
        </Column>

        <Column>
          <ExpandButton onClick={this.onExpandAddOnRow} />
        </Column>
      </Row>
    );
  }
}

AddOnRow.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
  onExpand: PropTypes.func,
  children: PropTypes.node
};

export default AddOnRow;