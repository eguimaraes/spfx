import * as React from 'react';
import type { IFluentUiControlsProps } from './IFluentUiControlsProps';
import FluentUiControlsBtn from '../../../controles/btn/FluentUiControlsBtn';
import FluentUiControlschk from '../../../controles/chk/FluentUiControlschk';
import FluentUiControlsChoiceGroup from '../../../controles/ChoiceGroup/FluentUiControlsChoiceGroup';









export default class FluentUiControls extends React.Component<IFluentUiControlsProps, {}> {
  public render(): React.ReactElement<IFluentUiControlsProps> {
    const {
      
    } = this.props;

    return (
    <div>

<FluentUiControlsBtn></FluentUiControlsBtn>
<FluentUiControlschk></FluentUiControlschk>
<FluentUiControlsChoiceGroup></FluentUiControlsChoiceGroup>
       </div>
    
    );
  }
}
