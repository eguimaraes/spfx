import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'TextFieldWebPartWebPartStrings';
import TextFieldWebPart from './components/TextFieldWebPart';
import { ITextFieldWebPartProps } from './components/ITextFieldWebPartProps';

export interface ITextFieldWebPartWebPartProps {
  description: string;
}

export default class TextFieldWebPartWebPart extends BaseClientSideWebPart<ITextFieldWebPartWebPartProps> {



  public render(): void {
    const element: React.ReactElement<ITextFieldWebPartProps> = React.createElement(
      TextFieldWebPart,
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
