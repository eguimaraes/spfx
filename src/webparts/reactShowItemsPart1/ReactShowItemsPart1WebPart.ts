import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'ReactShowItemsPart1WebPartStrings';
import ReactShowItemsPart1 from './components/ReactShowItemsPart1';
import { IReactShowItemsPart1Props } from './components/IReactShowItemsPart1Props';

export interface IReactShowItemsPart1WebPartProps {
  description: string;
}

export default class ReactShowItemsPart1WebPart extends BaseClientSideWebPart<IReactShowItemsPart1WebPartProps> {

 

  public render(): void {

const items=[
  {Id:1,Title:"item1"},
  {Id:2,Title:"item2"},
  {Id:4,Title:"item3"},
  {Id:4,Title:"item4"}


]

    const element: React.ReactElement<IReactShowItemsPart1Props> = React.createElement(
      ReactShowItemsPart1,
      {
        items
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return Promise.resolve();
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
