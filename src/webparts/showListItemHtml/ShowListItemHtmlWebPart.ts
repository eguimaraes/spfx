import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'ShowListItemHtmlWebPartStrings';
import ShowListItemHtml from './components/ShowListItemHtml';
import { IShowListItemHtmlProps } from './components/IShowListItemHtmlProps';

import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";




export interface IShowListItemHtmlWebPartProps {
  description: string;
}

export default class ShowListItemHtmlWebPart extends BaseClientSideWebPart<IShowListItemHtmlWebPartProps> {


public sp:any;

  public render(): void {
    const element: React.ReactElement<IShowListItemHtmlProps> = React.createElement(
      (ShowListItemHtml),
      {
              
        getItems: this.getItems,
        sp:this.sp,
        context:this.context
      
      }
    );

    ReactDom.render(element, this.domElement);
  }

  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      // Configure PnPjs to use the current SPFx context
      this.sp= spfi().using(SPFx(this.context));
      
    });
  }


// Get all items
public async getItems(sp:any,context:any) {

sp= spfi().using(SPFx(context));
let teste:any[]= await sp.web.lists.getByTitle("MyList").items.select("Title", "Description")();

return await teste;
 
 


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
