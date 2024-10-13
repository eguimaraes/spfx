import * as React from 'react';
import type { IFluentUiControlsProps } from './IFluentUiControlsProps';
import {ChoiceGroupBasicExample} from './ChoiceGroupBasicExample';
import {ChoiceGroupControlledExample} from './ChoiceGroupControlledExample';
import {ChoiceGroupImageExample} from './ChoiceGroupImageExample';
import {ChoiceGroupIconExample} from './ChoiceGroupIconExample';
import {ChoiceGroupLabelExample} from './ChoiceGroupLabelExample';
import {ChoiceGroupCustomExample} from './ChoiceGroupCustomExample';











export default class FluentUiControlsChoiceGroupBasicExample extends React.Component<IFluentUiControlsProps, {}> {
  public render(): React.ReactElement<IFluentUiControlsProps> {
    const {
      
    } = this.props;

    return (
    <div>

<div>Controles FluentUI</div>
<hr></hr>
<div>Folha de Testes by Edvaldo Guimaraes</div>
<hr></hr>
<div>ChoiceGroup</div>
<hr></hr>
<div>FluentUiControlsChoiceGroup - Arquivo</div>
<hr></hr>
<div><a href='https://developer.microsoft.com/en-us/fluentui#/controls/web/choicegroup'>Documentação: https://developer.microsoft.com/en-us/fluentui#/controls/web/choicegroup</a></div>
<hr></hr>



<div><div>ChoiceGroupBasicExample</div><div><hr></hr><ChoiceGroupBasicExample></ChoiceGroupBasicExample><hr></hr></div></div>

<div><div>ChoiceGroupControlledExample</div><div><hr></hr><ChoiceGroupControlledExample></ChoiceGroupControlledExample><hr></hr></div></div>

<div><div>ChoiceGroupImageExample</div><div><hr></hr><ChoiceGroupImageExample></ChoiceGroupImageExample><hr></hr></div></div>

<div><div>ChoiceGroupIconExample</div><div><hr></hr><ChoiceGroupIconExample></ChoiceGroupIconExample><hr></hr></div></div>

<div><div>ChoiceGroupLabelExample</div><div><hr></hr><ChoiceGroupLabelExample></ChoiceGroupLabelExample><hr></hr></div></div>

<div><div>ChoiceGroupCustomExample</div><div><hr></hr><ChoiceGroupCustomExample></ChoiceGroupCustomExample><hr></hr></div></div>




       </div>
    );
  }
}
