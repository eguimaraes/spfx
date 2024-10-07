import * as React from 'react';
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IPnPjsCrudDemoProps } from './IPnPjsCrudDemoProps';
 
export const PnPjsCrudDemo: React.FC<IPnPjsCrudDemoProps> = (props) => {
  const [items, setItems] = React.useState<any[]>([]);
 
  React.useEffect(() => {
    const fetchItems = async () => {
     
      try {
        const listItems = props.listItems;
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
};