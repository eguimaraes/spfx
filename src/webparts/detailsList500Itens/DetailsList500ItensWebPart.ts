import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'DetailsList500ItensWebPartStrings';
import {DetailsListDocumentsExample} from './components/DetailsList500Itens';
import { IDetailsList500ItensProps } from './components/IDetailsList500ItensProps';

export interface IDetailsList500ItensWebPartProps {
  description: string;
}

export default class DetailsList500ItensWebPart extends BaseClientSideWebPart<IDetailsList500ItensWebPartProps> {



  public render(): void {
    const element: React.ReactElement<IDetailsList500ItensProps> = React.createElement(
      DetailsListDocumentsExample,
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
