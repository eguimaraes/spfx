import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SimpleReactWebPart from './components/SimpleReactWebPart';

export interface ISimpleReactWebPartProps {
  description: string; // Adicione se você estiver usando essa propriedade
}

export default class SimpleReactWebPartWebPart extends BaseClientSideWebPart<ISimpleReactWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ISimpleReactWebPartProps> = React.createElement(
      SimpleReactWebPart
    );

    ReactDOM.render(element, this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Simple React Web Part Configuration'
          },
          groups: [
            {
              groupName: 'Group Name',
              groupFields: []
            }
          ]
        }
      ]
    };
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
