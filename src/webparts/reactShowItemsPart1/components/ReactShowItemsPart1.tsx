import * as React from 'react';

import type { IReactShowItemsPart1Props } from './IReactShowItemsPart1Props';


export default class ReactShowItemsPart1 extends React.Component<IReactShowItemsPart1Props, {}> {
  public render(): React.ReactElement<IReactShowItemsPart1Props> {
    const {
      items
    } = this.props;

    return (
      <div>
      <h2>List Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.Id}>Item:{item.Id} Valor:{item.Title}</li>
        ))}
      </ul>
    </div>
    );
  }
}
