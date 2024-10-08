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

public items:any;
public sp:any;

  public render(): void {
    const element: React.ReactElement<IShowListItemHtmlProps> = React.createElement(
      (ShowListItemHtml),
      {
        items: this.items,
        getItems:this.getItems,
        sp:this.sp
      }
    );

    ReactDom.render(element, this.domElement);
  }

  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      // Configure PnPjs to use the current SPFx context
      this.sp = spfi().using(SPFx(this.context));
      this.getItems(this.sp);
    });
  }


// Get all items
private async getItems(sp:any) {

  this.items=await sp.web.lists.getByTitle("MyList").items.select("Title", "Description")();
    
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
