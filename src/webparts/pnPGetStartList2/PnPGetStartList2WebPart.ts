import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'PnPGetStartList2WebPartStrings';
import PnPGetStartList2 from './components/PnPGetStartList2';
import { IPnPGetStartList2Props } from './components/IPnPGetStartList2Props';

import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";



export interface IPnPGetStartList2WebPartProps {
  description: string;
}

export default class PnPGetStartList2WebPart extends BaseClientSideWebPart<IPnPGetStartList2WebPartProps> {
 
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';  	
  public sp:any;


  
  public render(): void {
    
    const element: React.ReactElement<IPnPGetStartList2Props> = React.createElement(
      (PnPGetStartList2),
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        addItem:this.addItem,
        deleteItem:this.deleteItem,
        getItems:this.getItems,
        updateItem:this.updateItem,
        sp:this.sp
     
      }
    );
    this.addItem(this.sp);

    this.addItem(this.sp);
    this.addItem(this.sp);
    this.addItem(this.sp);

    this.deleteItem(this.sp,1);

    this.getItems(this.sp);

    this.updateItem(this.sp,3);



    ReactDom.render(element, this.domElement);
  }

  /*
  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }
*/
// Add a new item

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
