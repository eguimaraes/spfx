import * as React from 'react';
import type { IFluentUiControlsProps } from './IFluentUiControlsProps';
import FluentUiControlsBtn from '../../../controles/btn/FluentUiControlsBtn';
import FluentUiControlschk from '../../../controles/btn/FluentUiControlschk';







export default class FluentUiControls extends React.Component<IFluentUiControlsProps, {}> {
  public render(): React.ReactElement<IFluentUiControlsProps> {
    const {
      
    } = this.props;

    return (
    <div>

<FluentUiControlsBtn></FluentUiControlsBtn>
<FluentUiControlschk></FluentUiControlschk>
       </div>
    
    );
  }
}
