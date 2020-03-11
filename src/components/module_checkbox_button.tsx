import * as React from 'react';
import { LogModule } from '../classes/LogModule';
import { CheckboxButton } from './checkbox_button';

type Props = {
  onClick?: (e: React.MouseEvent<any, MouseEvent>) => void,
  module: LogModule
}

export class ModuleCheckboxButton extends React.Component<Props> {
  render() {
    const { name, color } = this.props.module;
    return (
      <CheckboxButton id={name} title={name} style={{backgroundColor: color.HUE, color: color.invert}} onClick={this.props.onClick}>{name}</CheckboxButton>
    );
  }
};

export default ModuleCheckboxButton;