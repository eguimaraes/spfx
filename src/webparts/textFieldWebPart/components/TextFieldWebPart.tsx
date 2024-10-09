import * as React from 'react';
import type { ITextFieldWebPartProps } from './ITextFieldWebPartProps';
import { TextField } from '@fluentui/react';


export default class TextFieldWebPart extends React.Component<ITextFieldWebPartProps, {}> {
 
  state = { value: '' };
 
  private handleChange = (e: any, newValue: string) => {
    this.setState({ value: newValue });
  };
 
  public render(): React.ReactElement<ITextFieldWebPartProps> {
    const {
    
    } = this.props;

    return (
      <div>
        <TextField label="Enter text" value={this.state.value} onChange={this.handleChange} />
        <p>Typed value: {this.state.value}</p>
      </div>
    );
  }
}
