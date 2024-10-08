import * as React from 'react';
import type { IShowListItemHtmlProps } from './IShowListItemHtmlProps';
import "@pnp/sp/lists";
import "@pnp/sp/items";


export default class ShowListItemHtml extends React.Component<IShowListItemHtmlProps, {}> {

 
 


  public render(): React.ReactElement<IShowListItemHtmlProps> {
    const {

sp,
getItems,
context
    
    } = this.props;

    const [items, setItems] = React.useState<any[]>([]);

    getItems(sp,context).then((value:any) => {
      console.log(value); // "Success!" será impresso após 1 segundo
     setItems(value);
    }).catch((error:any) => {
      console.error(error); // Caso a Promise seja rejeitada
    })

   
   
    return (
    
      <div>
      <h2>List Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.Id}>{item.Title}</li>
        ))}
      </ul>
    </div>);
      
    
    
  }
}
