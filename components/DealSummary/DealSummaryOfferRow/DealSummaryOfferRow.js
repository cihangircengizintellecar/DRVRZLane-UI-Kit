import React, { Component } from 'react';
import Row from '../../TableElements/Row';
import Column from '../../TableElements/Column';
import ExpandButton from '../../ExpandButton';
import dealSummaryOfferRowClasses from './DealSummaryOfferRow.scss';
import checkmarkImage from './checkmark.png';
import formatCurrency from '../../../helpers/FormatCurrency';
import makeNegative from '../../../helpers/MakeNegative';

class DealSummaryOfferRow extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isSelected: false,
      isExpanded: false,
      readOnly: false
    };
  }

  componentWillMount () {
    this.setState({
      isSelected: this.props.isSelected ? this.props.isSelected : false,
      readOnly: this.props.readOnly ? this.props.readOnly : false
    });
  }

  onSelectDealSummaryOfferRow = () => {
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

  onExpandDealSummaryOfferRow = () => {
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
    let formattedRowValue = '';
    if (this.props.value) {
      formattedRowValue = makeNegative(this.props.value, !this.props.positive);
      formattedRowValue = formatCurrency(formattedRowValue);

      if (this.props.type === 'PCT_INVOICE') {
        formattedRowValue = `%${this.props.value} off Invoice`;
      } else if (this.props.type === 'PCT_MSRP') {
        formattedRowValue = `%${this.props.value} off MSRP`;
      }
    }

    let formattedRequirements = '';
    let formattedDescription = '';

    if (this.props.description) {
      if (this.props.description.length > 60) {
        formattedDescription = `${this.props.description.substring(0, 60)}...`;
      } else {
        formattedDescription = this.props.description;
      }
    } else if (this.props.requirements) {
      if (this.props.requirements.length > 60) {
        formattedRequirements = `${this.props.requirements.substring(0, 60)}...`;
      } else {
        formattedRequirements = this.props.requirements;
      }
    } else {
      formattedDescription = this.props.description;
    }

    return (
      <Row className={this.props.readOnly ? dealSummaryOfferRowClasses.isDisabled : ''}>
        <Column>
          <div className={dealSummaryOfferRowClasses.OfferName}>
            <h5 className={this.props.readOnly ? dealSummaryOfferRowClasses.isDisabled : ''}>{this.props.name}</h5>
          </div>
        </Column>

        <Column>
          <div className={dealSummaryOfferRowClasses.OfferValue}>
            <h5 className={this.props.readOnly ? dealSummaryOfferRowClasses.isDisabled : ''}>{formattedRowValue}</h5>
          </div>
        </Column>

        <Column hideOnMobile>
          <div className={dealSummaryOfferRowClasses.OfferRequirements}>
            <span className={this.props.readOnly ? dealSummaryOfferRowClasses.isDisabled : ''}>
              {this.props.requirements &&
                this.props.requirements.length > 0 ?
                formattedRequirements :
                ' '
              }

              {this.props.description &&
                this.props.description.length > 0 ?
                formattedDescription :
                ' '
              }
            </span>
          </div>
        </Column>

        {this.props.onExpand &&
          <Column hideOnMobile>
            <ExpandButton onClick={this.onExpandDealSummaryOfferRow} />
          </Column>
        }
      </Row>
    );
  }
}

DealSummaryOfferRow.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  category: React.PropTypes.string,
  compatibilities: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string
  })),
  requirements: React.PropTypes.string,
  description: React.PropTypes.string,
  value: React.PropTypes.string,
  positive: React.PropTypes.bool,
  type: React.PropTypes.string,
  isSelected: React.PropTypes.bool,
  readOnly: React.PropTypes.bool,
  onSelect: React.PropTypes.func,
  onExpand: React.PropTypes.func,
  children: React.PropTypes.node
};

export default DealSummaryOfferRow;
