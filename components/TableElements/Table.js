import React, { Component, PropTypes } from 'react';
import TableHeaderCell from '../TableElements/TableHeaderCell';
import classes from './TableElements.scss';

class Table extends Component {
  static defaultProps = {
    headings: []
  }

  constructor (props) {
    super(props);
    this.state = { tableWidth: 0 };
  }

  tableRef = (el) => {
    if (el) {
      const tableWidth = el.getBoundingClientRect().width;
      this.setState({ tableWidth });
    }
  }

  render () {
    const headingClassNames = ['TableHeaderCell', 'hideOnMobile', 'hideOnPortable'];
    const mobileHeadingClassNames = ['TableHeaderCell', 'showOnMobile'];
    const portableHeadingClassNames = ['TableHeaderCell', 'showOnPortable'];

    return (
      <table className={classes.Table} ref={this.tableRef}>
        <thead>
          <tr className={classes.HeaderRow}>
            {this.props.headings && this.props.headings.map((heading, i) => (
              <TableHeaderCell
                classNames={this.props.headings ? headingClassNames : mobileHeadingClassNames}
                key={i}
                onClick={heading.clickToSort}
                sortDirection={heading.sortDirection}
                sortByKey={heading.sortByKey}
                isCurrentSortBy={heading.isCurrentSortBy}
                label={heading.label}
              />
            ))}

            {this.props.mobileHeadings && this.props.mobileHeadings.map((heading, i) => (
              <TableHeaderCell
                classNames={mobileHeadingClassNames}
                key={i}
                onClick={heading.clickToSort}
                sortDirection={heading.sortDirection}
                sortByKey={heading.sortByKey}
                isCurrentSortBy={heading.isCurrentSortBy}
                label={heading.label}
              />
            ))}

            {this.props.portableHeadings && this.props.portableHeadings.map((heading, i) => (
              <TableHeaderCell
                classNames={portableHeadingClassNames}
                key={i}
                onClick={heading.clickToSort}
                sortDirection={heading.sortDirection}
                sortByKey={heading.sortByKey}
                isCurrentSortBy={heading.isCurrentSortBy}
                label={heading.label}
              />
            ))}
          </tr>
        </thead>

        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  children: React.PropTypes.node,
  headings: PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string,
    clickToSort: React.PropTypes.func
  })).isRequired,
  mobileHeadings: PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string,
    clickToSort: React.PropTypes.func
  })).isRequired,
  portableHeadings: PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string,
    clickToSort: React.PropTypes.func
  }))
};

export default Table;
