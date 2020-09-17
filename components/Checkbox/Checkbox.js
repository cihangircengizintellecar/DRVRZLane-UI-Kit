import React, { Component, PropTypes } from 'react';
import Row from '../TableElements/Row';
import Column from '../TableElements/Column';
import classes from './Checkbox.scss';
import checkmarkImage from './checkmark.png';

class Checkbox extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isSelected: false,
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

  onToggleCheckbox = () => {
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

  render () {
    return (
      <Row rowType="CheckBoxRow">
        <Column>
          <div className={classes.rowCheckboxWrapper}>
            <div>
              <div className={classes.rowCheckbox} onClick={this.onToggleCheckbox}>
                {this.state.isSelected &&
                  <img src={checkmarkImage} />
                }
              </div>
            </div>
          </div>
        </Column>
        <Column>
          <div className={classes.rowTitle}>
            {this.props.label}
          </div>
        </Column>
      </Row>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};

export default Checkbox;
