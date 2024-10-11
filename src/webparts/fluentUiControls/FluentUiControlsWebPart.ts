import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'FluentUiControlsWebPartStrings';
import FluentUiControls from './components/FluentUiControls';
import { IFluentUiControlsProps } from './components/IFluentUiControlsProps';

export interface IFluentUiControlsWebPartProps {
  description: string;
}

export default class FluentUiControlsWebPart extends BaseClientSideWebPart<IFluentUiControlsWebPartProps> {

 

  public render(): void {
    const element: React.ReactElement<IFluentUiControlsProps> = React.createElement(
      FluentUiControls,
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
