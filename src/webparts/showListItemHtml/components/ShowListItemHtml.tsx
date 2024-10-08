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

    
    getItems(sp,context).then((value:any) => {
      console.log(value); // "Success!" será impresso após 1 segundo
  
    }).catch((error:any) => {
      console.error(error); // Caso a Promise seja rejeitada
    })

   
   
    return (
    
      <div>
      Exemplo ainda nao renderiza - Salva e loga mas nao tras os itens
    </div>);
      
    
    
  }
}
