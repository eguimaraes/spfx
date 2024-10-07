import { spfi, SPFx } from "@pnp/sp";
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PnPjsCrudDemo } from './components/PnPjsCrudDemo';
import { IPnPjsCrudDemoProps } from './components/IPnPjsCrudDemoProps';
 
export default class PnPjsCrudDemoWebPart extends BaseClientSideWebPart<{}> {
 
 public sp:any;
 public listItems:any;

  public async onInit(): Promise<void> {
     this.sp=spfi().using(SPFx(this.context));  // Initializes PnPjs with the SharePoint context
     this.listItems = await this.sp.web.lists.getByTitle('MyList').items();
     
    return super.onInit();
  }
 
  public render(): void {
    const element: React.ReactElement<IPnPjsCrudDemoProps> = React.createElement(
      PnPjsCrudDemo,
      {
        context: this.context,
        sp:this.sp,
        listItems:this.listItems
      }
    );
 
    ReactDom.render(element, this.domElement);
  }
}