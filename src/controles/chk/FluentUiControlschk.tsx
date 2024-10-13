import * as React from 'react';
import type { IFluentUiControlsProps } from './IFluentUiControlsProps';
import {CheckboxBasicExample} from './CheckboxBasicExample';
import {CheckboxOtherExample} from './CheckboxOtherExample';
import {CheckboxIndeterminateExample} from './CheckboxIndeterminateExample';








export default class FluentUiControlschk extends React.Component<IFluentUiControlsProps, {}> {
  public render(): React.ReactElement<IFluentUiControlsProps> {
    const {
      
    } = this.props;

    return (
    <div>

<div>Controles FluentUI</div>
<hr></hr>
<div>Folha de Testes by Edvaldo Guimaraes</div>
<hr></hr>
<div>CheckBox</div>
<hr></hr>
<div>FluentUiControlschk - Arquivo</div>
<hr></hr>
<div><a href='https://developer.microsoft.com/en-us/fluentui#/controls/web/checkbox'>Documentação: https://developer.microsoft.com/en-us/fluentui#/controls/web/checkbox</a></div>
<hr></hr>



<div><div>CheckboxBasicExample</div><div><hr></hr><CheckboxBasicExample></CheckboxBasicExample><hr></hr></div></div>
<div><div>CheckboxOtherExample</div><div><hr></hr><CheckboxOtherExample></CheckboxOtherExample><hr></hr></div></div>
<div><div>CheckboxIndeterminateExample</div><div><hr></hr><CheckboxIndeterminateExample></CheckboxIndeterminateExample><hr></hr></div></div>




       </div>
    );
  }
}
