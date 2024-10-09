import * as React from 'react';
import type { IDetailsListProps } from './IDetailsListProps';

import { DetailsList, IColumn } from '@fluentui/react';

const columns: IColumn[] = [
  { key: 'column1',
    name: 'Title',
    fieldName: 'Title',
    minWidth: 100,
    maxWidth: 200 },
  { key: 'column2',
    name: 'Description',
    fieldName: 'Description',
    minWidth: 100,
    maxWidth: 300 }
];

const items = [
  { key: '1', Title: 'Item 1', Description: 'Description of Item 1' },
  { key: '2', Title: 'Item 2', Description: 'Description of Item 2' }
];


export default class MyDetailsListComponent extends React.Component<IDetailsListProps, {}> {
  public render(): React.ReactElement<IDetailsListProps> {
    const {
     
    } = this.props;

    return (
      <div>
      <DetailsList
        items={items}
        columns={columns}
        selectionMode={0} // none, single, or multiple selection
      />
    </div>
    );
  }
}
