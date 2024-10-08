import * as React from 'react';
import type { IMostraItemsListaProps } from './IMostraItemsListaProps';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class MostraItemsLista extends React.Component<IMostraItemsListaProps, {}> {
  public render(): React.ReactElement<IMostraItemsListaProps> {
    const {
     context
    } = this.props;

    const [items, setItems] = React.useState<any[]>([]);
 
    // Fetch items from the SharePoint list on component mount
    React.useEffect(() => {
      const fetchItems = async () => {
        const sp = spfi().using(SPFx(context));
        try {
          const listItems = await sp.web.lists.getByTitle('MyList').items();
          setItems(listItems);
        } catch (error) {
          console.error("Error fetching items: ", error);
        }
      };
   
      fetchItems();
    }, []);
   
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
