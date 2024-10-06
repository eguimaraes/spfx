import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'Article2WebPartStrings';
import Article2 from './components/Article2';
import { IArticle2Props } from './components/IArticle2Props';
import { spfi, SPFx } from "@pnp/sp";




import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


export interface IArticle2WebPartProps {
  description: string;
}

export interface IDocumentItem {
  Title: string;
  Id: number;
}





export default class Article2WebPart extends BaseClientSideWebPart<IArticle2WebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IArticle2Props> = React.createElement(
      Article2,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  
  

 
  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }



  protected async onInit(): Promise<void> {
    return super.onInit().then(_ => {
        const sp = spfi().using(SPFx(this.context));  // Initialize PnPjs with SPFx context

        // Fetch items from the SharePoint list

        const listTitle = "paises"; // Replace with your list name
      const list = sp.web.lists.getByTitle(listTitle);
      const item = list.items.select("Title", "Id").getById(1);
      console.log("Teste de PnP");

      console.log(item.fieldValuesAsHTML);
        
      
     



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
