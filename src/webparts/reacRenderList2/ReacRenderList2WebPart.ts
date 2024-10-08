import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'ReacRenderList2WebPartStrings';
import ReacRenderList2 from './components/ReacRenderList2';
import { IReacRenderList2Props } from './components/IReacRenderList2Props';

import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export interface IReacRenderList2WebPartProps {
  description: string;
}

export default class ReacRenderList2WebPart extends BaseClientSideWebPart<IReacRenderList2WebPartProps> {

public sp:any;
public items:any[];

  private async getItems(sp:any) {
    this.items = await sp.web.lists.getByTitle("MyList").items.select("Title", "Description")();
    console.log(this.items);
  }

  public render(): void {
   
   this.getItems(this.sp).then(()=>{
   
   
    const element: React.ReactElement<IReacRenderList2Props> = React.createElement(
      ReacRenderList2,
      {
        items:this.items,
        getItems:this.getItems,
        sp:this.sp

               
      }
    );

    ReactDom.render(element, this.domElement);})
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
