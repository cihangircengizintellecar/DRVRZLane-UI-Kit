import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';
// import LayoutElements from '../LayoutElements';
// import TableFilters from '../TableFilters';
import Table from './Table';
import Row from './Row';
import Column from './Column';
// import range from 'lodash.range';

let sortDir = 'desc';
let currentSortCol = 'updatedat';

const sortColumn = ({ sortByKey, sortDirection }) => {
  currentSortCol = sortByKey;
  sortDir = sortDirection;
};

const headings = [
  { label: 'Name', sortByKey: 'name', clickToSort: sortColumn, sortDirection: sortDir, isCurrentSortBy: currentSortCol === 'name' },
  { label: 'Current Step', sortByKey: 'dealstep', clickToSort: sortColumn, sortDirection: sortDir, isCurrentSortBy: currentSortCol === 'dealstep' },
  { label: 'Date Modified', sortByKey: 'updatedat', clickToSort: sortColumn, sortDirection: sortDir, isCurrentSortBy: currentSortCol === 'updatedat' },
  { label: 'Phone' },
  { label: 'Email' },
  { label: 'Archive' }
];

const mobileTableHeadings = [
  { label: 'Name' },
  { label: 'Current Step' }
];

const rowData = [
  { name: 'Dan Fernandez', status: 'Financing Options', dateModified: 'Nov 14, 2016', phone: '214-588-1033', email: 'danfernandez@gmail.com', archive: 'x' },
  { name: 'Ben Fernandez', status: 'Pending Approval', dateModified: 'Nov 12, 2016', phone: '214-930-0304', email: 'benfernandez@gmail.com', archive: 'x' },
  { name: 'Fanny Fernandez', status: 'Financing Options', dateModified: 'Nov 11, 2016', phone: '214-765-4344', email: 'fannyfernandez@gmail.com', archive: 'x' }
];

storiesOf('TableElements', module)
  .add('TableElements', () => (
    <div>
      <Table headings={headings} mobileHeadings={mobileTableHeadings}>
        {() => rowData.map((row, index) => (
          <Row key={index}>
            <Column>
              {row.name}
            </Column>
            <Column>
              {row.status}
            </Column>
            <Column>
              {row.dateModified}
            </Column>
            <Column>
              {row.phone}
            </Column>
            <Column>
              {row.email}
            </Column>
            <Column>
              {row.archive}
            </Column>
          </Row>
        ))}
      </Table>
    </div>
  ));
