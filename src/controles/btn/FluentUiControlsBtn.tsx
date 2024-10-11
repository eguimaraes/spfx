import * as React from 'react';
import type { IFluentUiControlsProps } from './IFluentUiControlsProps';
import {ButtonDefaultExample} from './ButtonDefaultExample';
import {ButtonCompoundExample} from './ButtonCompoundExample';
import {ButtonCommandBarExample} from './ButtonCommandBarExample';
import {ButtonSplitExample} from './ButtonSplitExample';
import {ButtonIconExample} from './ButtonIconExample';
import {ButtonIconWithTooltipExample} from './ButtonIconWithTooltipExample';
import {ButtonContextualMenuExample} from './ButtonContextualMenuExample';
import {ButtonActionExample} from './ButtonActionExample';
import {ButtonCommandExample} from './ButtonCommandExample';
import {ButtonAnchorExample} from './ButtonAnchorExample';
import {ButtonSplitCustomExample} from './ButtonSplitCustomExample';
import {ButtonToggleExample} from './ButtonToggleExample';







export default class FluentUiControlsBtn extends React.Component<IFluentUiControlsProps, {}> {
  public render(): React.ReactElement<IFluentUiControlsProps> {
    const {
      
    } = this.props;

    return (
    <div>

<div>Controles FluentUI</div>
<hr></hr>
<div>Folha de Testes by Edvaldo Guimaraes</div>
<hr></hr>
<div>Botões</div>
<hr></hr>
<div>FluentUiControlsBtn - Arquivo</div>
<hr></hr>
<div><a href='https://developer.microsoft.com/en-us/fluentui#/controls/web/button'>Documentação: https://developer.microsoft.com/en-us/fluentui#/controls/web/button</a></div>
<hr></hr>
      <hr></hr>
      <div>ButtonDefaultExample</div>
      
      <hr></hr>
       <div><ButtonDefaultExample></ButtonDefaultExample></div>
      <hr></hr>
      
       <div>ButtonCompoundExample</div>
       <hr></hr>
       <div><ButtonCompoundExample></ButtonCompoundExample></div>
       <hr></hr>
       <div>ButtonCommandBarExample</div>
       <hr></hr>
      <div><ButtonCommandBarExample></ButtonCommandBarExample></div>
      <hr></hr>
      <div>ButtonSplitExample</div>
      <hr></hr>
      <div><ButtonSplitExample></ButtonSplitExample></div>
      <hr></hr>
      <div>ButtonIconExample</div>
      <hr></hr>
      <div><ButtonIconExample></ButtonIconExample></div>
      <hr></hr>
      <div>ButtonIconWithTooltipExample</div>
      <hr></hr>
      <div><ButtonIconWithTooltipExample></ButtonIconWithTooltipExample></div>
      <hr></hr>    
      <div>ButtonContextualMenuExample</div>
      <hr></hr>
      <div><ButtonContextualMenuExample></ButtonContextualMenuExample></div>
      <hr></hr>

      <div>ButtonActionExample</div>
      <hr></hr>
      <div><ButtonActionExample></ButtonActionExample></div>
      <hr></hr>

      <div>ButtonCommandExample</div>
      <hr></hr>
      <div><ButtonCommandExample></ButtonCommandExample></div>
      <hr></hr>

      
      <div>ButtonAnchorExample</div>
      <hr></hr>
      <div><ButtonAnchorExample></ButtonAnchorExample></div>
      <hr></hr>


      <div>ButtonAnchorExample</div>
      <hr></hr>
      <div><ButtonSplitCustomExample></ButtonSplitCustomExample></div>
      <hr></hr>
      
      <div>ButtonToggleExample</div>
      <hr></hr>
      <div><ButtonToggleExample></ButtonToggleExample></div>
      <hr></hr>
      
       </div>
    
    );
  }
}
