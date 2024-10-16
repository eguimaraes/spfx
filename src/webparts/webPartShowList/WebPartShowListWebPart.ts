import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'WebPartShowListWebPartStrings';
import WebPartShowList from './components/WebPartShowList';
import { IWebPartShowListProps } from './components/IWebPartShowListProps';

import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export interface IWebPartShowListWebPartProps {
  description: string;
}

export default class WebPartShowListWebPart extends BaseClientSideWebPart<IWebPartShowListWebPartProps> {

 public sp:any;

  // Get all items
private async getItems(sp:any) {
  const items = await sp.web.lists.getByTitle("MyList").items.select("Title", "Description")();
  return items;
}

  public render(): void {
    const element: React.ReactElement<IWebPartShowListProps> = React.createElement(
      WebPartShowList,
      {
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
    });
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
