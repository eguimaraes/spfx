import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'MostraItemsListaWebPartStrings';
import MostraItemsLista from './components/MostraItemsLista';
import { IMostraItemsListaProps } from './components/IMostraItemsListaProps';

export interface IMostraItemsListaWebPartProps {
  description: string;
}

import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/lists";
import "@pnp/sp/items";
 

export default class MostraItemsListaWebPart extends BaseClientSideWebPart<IMostraItemsListaWebPartProps> {

/*
  public render(): void {
    const element: React.ReactElement<IMostraItemsListaProps> = React.createElement(
      MostraItemsLista,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  } */

  public render(): void {
    const element: React.ReactElement<IMostraItemsListaProps> = React.createElement(
      MostraItemsLista,
      {
        context: this.context
      }
    );
 
    ReactDom.render(element, this.domElement);
  }

  public onInit(): Promise<void> {
    // Initialize PnPjs with the SharePoint context
    spfi().using(SPFx(this.context));
    return super.onInit();
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
