import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Row from '../TableElements/Row';
import Column from '../TableElements/Column';
import ExpandButton from '../ExpandButton';
import classes from './OfferRow.scss';
import checkmarkImage from './checkmark.png';
import greenCheckmarkImage from './checkmark-green.png';
import formatCurrency from '../../helpers/FormatCurrency';

class OfferRow extends Component {
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

    if (this.props.readOnly) {
      this.setState({
        readOnly: true
      });
    } else {
      this.setState({
        readOnly: false
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

    if (nextProps.readOnly !== this.props.readOnly) {
      if (nextProps.readOnly) {
        this.setState({
          readOnly: true
        });
      } else {
        this.setState({
          readOnly: false
        });
      }
    }
  }

  onSelectOfferRow = () => {
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

  onExpandOfferRow = () => {
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
    let formattedRowAmount = '-';
    if (this.props.amount) {
      if (this.props.type === 'PCT_INVOICE') {
        formattedRowAmount = `%${this.props.amount} off Invoice`;
      } else if (this.props.type === 'PCT_MSRP') {
        formattedRowAmount = `%${this.props.amount} off MSRP`;
      } else {
        formattedRowAmount = `${formatCurrency(this.props.amount)}`;
      }
    }


    let formattedRequirement = '';
    if (this.props.requirements && this.props.requirements.length > 60) {
      formattedRequirement = `${this.props.requirements.substring(0, 60)}...`;
    } else {
      formattedRequirement = this.props.requirements;
    }

    return (
      <Row className={(this.props.readOnly ? classes.isDisabled : '')} rowType="OfferRow">
        {this.props.hideCheckbox ?
          <Column classNames={['hideCheckbox']}>
            <div>
              <img src={greenCheckmarkImage} />
            </div>
          </Column>
          :
          <Column>
            <div className={classes.OfferRowCheckboxWrapper}>
              {(this.state.isSelected) ?
                <div className={`${this.props.readOnly ? classes.hideWhenDisabled : ''} ${classes.OfferRowCheckbox}`} onClick={this.onSelectOfferRow}>
                  <img src={checkmarkImage} />
                </div>
                :
                <div className={`${this.props.readOnly ? classes.hideWhenDisabled : ''} ${classes.OfferRowCheckbox}`} onClick={this.onSelectOfferRow} />
              }
            </div>
          </Column>
        }

        <Column classNames={[classes.offerColumn]}>
          <div className={classes.OfferName}>
            <div className={this.props.readOnly ? classes.isDisabled : ''}>
              <h5 className={this.props.hideCheckbox ? classes.hideCheckbox : ''}>{this.props.name}</h5>
              <div className={`${classes.OfferAmount} ${classes.showOnMobile}`}>{formattedRowAmount}</div>
            </div>
          </div>
        </Column>

        <Column hideOnMobile classNames={[classes.offerColumn]}>
          <div className={classes.OfferAmount}>
            <span className={this.props.readOnly ? classes.isDisabled : ''}>{formattedRowAmount}</span>
          </div>
        </Column>

        <Column hideOnMobile classNames={[classes.offerColumn]}>
          <div className={classes.OfferRequirements}>
            <span className={this.props.readOnly ? classes.isDisabled : ''}>
              {this.props.requirements && this.props.requirements.length > 0 ?
                formattedRequirement
                :
                'No requirements.'
              }
            </span>
          </div>
        </Column>

        <Column>
          {this.props.requirements && this.props.requirements.length > 0 &&
            <ExpandButton onClick={this.onExpandOfferRow} />
          }
        </Column>
      </Row>
    );
  }
}

OfferRow.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  compatibilities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  requirements: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
  isSelected: PropTypes.bool,
  hideCheckbox: PropTypes.bool,
  readOnly: PropTypes.bool,
  onSelect: PropTypes.func,
  onExpand: PropTypes.func,
  children: PropTypes.node
};

export default OfferRow;