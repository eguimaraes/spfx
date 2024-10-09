import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'ButtonWebPartWebPartStrings';
import ButtonWebPart from './components/ButtonWebPart';
import { IButtonWebPartProps } from './components/IButtonWebPartProps';

export interface IButtonWebPartWebPartProps {
  description: string;
}

export default class ButtonWebPartWebPart extends BaseClientSideWebPart<IButtonWebPartWebPartProps> {

  
  public render(): void {
    const element: React.ReactElement<IButtonWebPartProps> = React.createElement(
      ButtonWebPart,
      {
        
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
