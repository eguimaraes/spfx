import * as React from 'react';
import type { IButtonWebPartProps } from './IButtonWebPartProps';
import { PrimaryButton } from '@fluentui/react';

export default class ButtonWebPart extends React.Component<IButtonWebPartProps, {}> {
  public render(): React.ReactElement<IButtonWebPartProps> {
    const {
    } = this.props;

    return ( <div>
      <PrimaryButton text="Click Me!" onClick={() => alert('Button clicked')} />
    </div>);
  }
}
