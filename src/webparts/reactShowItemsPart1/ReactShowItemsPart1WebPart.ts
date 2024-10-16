import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";



import * as strings from 'ReactShowItemsPart1WebPartStrings';
import ReactShowItemsPart1 from './components/ReactShowItemsPart1';


export interface IReactShowItemsPart1Props {
  items:any[]
  
}


export default class ReactShowItemsPart1WebPart extends BaseClientSideWebPart<IReactShowItemsPart1Props> {

public items:any[];
public sp:any;

  private async getItems() {
    
    await this.sp.web.lists.getByTitle("MyList").items.select("Title", "Description")().then((items:any)=>{this.items=items;console.log(this.items) });
    
  }

  public render(): void {
    this.getItems().then((items:any)=>{
    
    const element: React.ReactElement<IReactShowItemsPart1Props> = React.createElement(
      ReactShowItemsPart1,
      {
        items:items,
       
      }
    );

    ReactDom.render(element, this.domElement);
  }
  )
  }

  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      // Configure PnPjs to use the current SPFx context
      this.sp = spfi().using(SPFx(this.context));  
      spfi().using(SPFx(this.context));
       
      
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
