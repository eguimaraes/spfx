import * as React from 'react';
import type { IDropdownWebPartProps } from './IDropdownWebPartProps';
import { Dropdown, IDropdownOption } from '@fluentui/react';

const options: IDropdownOption[] = [
  { key: 'option1', text: 'Option 1' },
  { key: 'option2', text: 'Option 2' },
  { key: 'option3', text: 'Option 3' },
];

export default class DropdownWebPart extends React.Component<IDropdownWebPartProps, {}> {
  state = { selectedKey: '' };
 
  private handleChange = (event: React.FormEvent<HTMLDivElement>, option: IDropdownOption): void => {
    this.setState({ selectedKey: option.key });
  };
  
  public render(): React.ReactElement<IDropdownWebPartProps> {
    const {
      
    } = this.props;

    return (
      <div>
      <Dropdown placeholder="Select an option" options={options} onChange={this.handleChange} />
      <p>Selected: {this.state.selectedKey}</p>
    </div>
    );
  }
}
