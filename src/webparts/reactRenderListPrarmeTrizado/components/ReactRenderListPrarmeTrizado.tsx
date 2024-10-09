import * as React from 'react';
import type { IReactRenderListPrarmeTrizadoProps } from './IReactRenderListPrarmeTrizadoProps';


export default class ReactRenderListPrarmeTrizado extends React.Component<IReactRenderListPrarmeTrizadoProps, {}> {
  public render(): React.ReactElement<IReactRenderListPrarmeTrizadoProps> {
    const {
     items
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
