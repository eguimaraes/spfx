import * as React from 'react';
import type { IShowListItemHtmlProps } from './IShowListItemHtmlProps';
import "@pnp/sp/lists";
import "@pnp/sp/items";


export default class ShowListItemHtml extends React.Component<IShowListItemHtmlProps, {}> {

 



  public render(): React.ReactElement<IShowListItemHtmlProps> {
    const {


 items
  
    
    } = this.props;




   
      
   const itens:any[]=items;

   console.log(itens);

   

    return (
    
     <div>
     ed
   </div>);
      
    
    
  }
}
