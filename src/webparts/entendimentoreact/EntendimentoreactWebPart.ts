/*
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'EntendimentoreactWebPartStrings';
import Entendimentoreact from './components/Entendimentoreact';


export interface IEntendimentoreactWebPartProps {
  description: string;
}

export interface IEntendimentoreactProps {

}


export default class EntendimentoreactWebPart extends BaseClientSideWebPart<IEntendimentoreactWebPartProps> {

  
  public render(): void {
    const element: React.ReactElement<IEntendimentoreactProps> = React.createElement(
      Entendimentoreact, { }
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
*/