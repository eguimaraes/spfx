import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'MostraListaReactBasicoWebPartStrings';
import MostraListaReactBasico from './components/MostraListaReactBasico';
import { IMostraListaReactBasicoProps } from './components/IMostraListaReactBasicoProps';

import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


export interface IMostraListaReactBasicoWebPartProps {
  description: string;
}

export default class MostraListaReactBasicoWebPart extends BaseClientSideWebPart<IMostraListaReactBasicoWebPartProps> {

public sp:any;
public items:any[];

 
 

  protected onInit(): Promise<void> {
    spfi().using(SPFx(this.context));
    return super.onInit();
  }

  private async _getListItems(): Promise<any[]> {
    try {
      const items: any[] = await spfi().web.lists.getByTitle('MyList').items();
      console.log(items);
      return items;
    } catch (error) {
      console.error('Error fetching list items: ', error);
      return [];
    }
  }
  
  public async render(): Promise<void> {
    const items: any[] = await this._getListItems();
  
    const element: React.ReactElement<IMostraListaReactBasicoProps> = React.createElement(
      MostraListaReactBasico,
      {
        items: items // Pass the items to the React component
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
