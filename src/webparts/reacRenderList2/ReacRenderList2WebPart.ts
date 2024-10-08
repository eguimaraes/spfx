import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'ReacRenderList2WebPartStrings';
import ReacRenderList2 from './components/ReacRenderList2';
import { IReacRenderList2Props } from './components/IReacRenderList2Props';

export interface IReacRenderList2WebPartProps {
  description: string;
}

export default class ReacRenderList2WebPart extends BaseClientSideWebPart<IReacRenderList2WebPartProps> {

 

  public render(): void {
    const element: React.ReactElement<IReacRenderList2Props> = React.createElement(
      ReacRenderList2,
      {
        items:[{Id:1,Title:"Teste1"},
               {Id:2,Title:"Teste2"},
               {Id:3,Title:"Teste3"}]
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return Promise.resolve()
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
