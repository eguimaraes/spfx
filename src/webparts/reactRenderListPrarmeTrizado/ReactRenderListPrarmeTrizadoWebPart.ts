import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'ReactRenderListPrarmeTrizadoWebPartStrings';
import ReactRenderListPrarmeTrizado from './components/ReactRenderListPrarmeTrizado';
import { IReactRenderListPrarmeTrizadoProps } from './components/IReactRenderListPrarmeTrizadoProps';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";




export interface IReactRenderListPrarmeTrizadoWebPartProps {
  description: string;
}



export default class ReactRenderListPrarmeTrizadoWebPart extends BaseClientSideWebPart<IReactRenderListPrarmeTrizadoWebPartProps> {

  public sp:any;
  public items:any[];

  public render(): void {

    

    this.getItems(this.sp,{nome:"MyList",campos:["Title", "Description"]}).then(()=>{


    const element: React.ReactElement<IReactRenderListPrarmeTrizadoProps> = React.createElement(
      ReactRenderListPrarmeTrizado,
      {
       items:this.items 
      }
    );

    ReactDom.render(element, this.domElement);})
  }


// Get all items
private async getItems(sp:any,lista:any) {
  this.items = await sp.web.lists.getByTitle(lista.nome).items.select(lista.campos)();
  console.log( this.items);
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
