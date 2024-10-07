import * as React from 'react';
import type { IPnPjsCrudDemo2TrasPorteFuncaoProps } from './IPnPjsCrudDemo2TrasPorteFuncaoProps';


export default class PnPjsCrudDemo2TrasPorteFuncao extends React.Component<IPnPjsCrudDemo2TrasPorteFuncaoProps, {}> {
  public render(): React.ReactElement<IPnPjsCrudDemo2TrasPorteFuncaoProps> {
    const {
      addItem,
      deleteItem,
      getItems,
      updateItem,
      sp
    } = this.props;

    return (
      <div>
        <button onClick={() => addItem(sp)}>Add Item</button>
        <button onClick={() => getItems(sp)}>Get Items</button>
        <button onClick={() => updateItem(sp,1)}>Update Item</button>
        <button onClick={() => deleteItem(sp,1)}>Delete Item</button>
      </div>
    );
  }
}
