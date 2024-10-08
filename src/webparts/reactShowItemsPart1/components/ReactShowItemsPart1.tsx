import * as React from 'react';

import type { IReactShowItemsPart1Props } from './IReactShowItemsPart1Props';


export default class ReactShowItemsPart1 extends React.Component<IReactShowItemsPart1Props, {}> {
  public render(): React.ReactElement<IReactShowItemsPart1Props> {
    const {
    items
    } = this.props;


const htmlEle=()=>{return (
  <div>
    <h2>List Items</h2>
    <ul>
      {items.map(item => (
        <li key={item.Id}>{item.Title}</li>
      ))}
    </ul>
  </div>
);}

    return (
      <div>
      <h2>List Items</h2>
      <ul>
       {htmlEle}
      </ul>
    </div>
    );
  }
}
