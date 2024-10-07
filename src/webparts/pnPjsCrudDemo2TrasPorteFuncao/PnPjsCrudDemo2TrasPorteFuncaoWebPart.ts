import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PnPjsCrudDemo2TrasPorteFuncaoWebPartStrings';
import PnPjsCrudDemo2TrasPorteFuncao from './components/PnPjsCrudDemo2TrasPorteFuncao';
import { IPnPjsCrudDemo2TrasPorteFuncaoProps } from './components/IPnPjsCrudDemo2TrasPorteFuncaoProps';

import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";



export interface IPnPjsCrudDemo2TrasPorteFuncaoWebPartProps {
  description: string;
}

export default class PnPjsCrudDemo2TrasPorteFuncaoWebPart extends BaseClientSideWebPart<IPnPjsCrudDemo2TrasPorteFuncaoWebPartProps> {

 

  public sp:any;

  private async addItem(sp:any) {
    try {
      const list = sp.web.lists.getByTitle("MyList");
      const result = await list.items.add({
        Title: "New Item",
        Description: "This is a new item"
      });
      console.log(result); // Use the returned result directly
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }
  
  
  // Get all items
  private async getItems(sp:any) {
    const items = await sp.web.lists.getByTitle("MyList").items.select("Title", "Description")();
    console.log(items);
  }
  
  // Update an item
  private async updateItem(sp:any,itemId: number) {
    const item = await sp.web.lists.getByTitle("MyList").items.getById(itemId).update({
      Title: "Updated Title"
    });
    console.log(item);
  }
  
  // Delete an item
  private async deleteItem(sp:any,itemId: number) {
    await sp.web.lists.getByTitle("MyList").items.getById(itemId).delete();
    console.log(`Item with ID ${itemId} deleted`);
  }
    
    public onInit(): Promise<void> {
      return super.onInit().then(_ => {
        // Configure PnPjs to use the current SPFx context
        this.sp = spfi().using(SPFx(this.context));
      });
    }

  public render(): void {
    const element: React.ReactElement<IPnPjsCrudDemo2TrasPorteFuncaoProps> = React.createElement(
      PnPjsCrudDemo2TrasPorteFuncao,
      {
        addItem:this.addItem,
        deleteItem:this.deleteItem,
        getItems:this.getItems,
        updateItem:this.updateItem,
        sp:this.sp
      }
    );

    ReactDom.render(element, this.domElement);
  }

 


 

 
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
