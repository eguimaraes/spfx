import * as React from 'react';

import type { IWebPartShowListProps } from './IWebPartShowListProps';



export default class WebPartShowList extends React.Component<IWebPartShowListProps, {}> {
  public render(): React.ReactElement<IWebPartShowListProps> {
    const {
     getItems,
     sp
    } = this.props;

    return (
      <div>
      
      <button onClick={() => getItems(sp)}>Get Items</button>
          </div>
    );
  }
}
