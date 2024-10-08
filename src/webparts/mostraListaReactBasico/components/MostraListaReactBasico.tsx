import * as React from 'react';

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export interface IPnPGetListItemsProps {
  items: any[];
}



 const MostraListaReactBasico: React.FC<IPnPGetListItemsProps> = (props) => {
  return (
    <div>
      <h2>List Items</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.Id}>
              <td>{item.Id}</td>
              <td>{item.Title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostraListaReactBasico;
