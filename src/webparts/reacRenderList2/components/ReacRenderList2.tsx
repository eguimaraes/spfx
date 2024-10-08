import * as React from 'react';

import type { IReacRenderList2Props } from './IReacRenderList2Props';


export default class ReacRenderList2 extends React.Component<IReacRenderList2Props, {}> {
  public render(): React.ReactElement<IReacRenderList2Props> {
    const {
      items,
      
    } = this.props;




    return (
      <div>
      <h2>List Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.Id}>{item.Title}</li>
        ))}
      </ul>
    </div>
    );
  }
}
