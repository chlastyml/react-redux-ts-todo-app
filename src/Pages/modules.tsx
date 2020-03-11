import * as React from 'react';
import { Sidebar } from '../components/sidebar';
import '../styles/layout.scss';
import { LogModule } from '../classes/LogModule';
import { ModuleCheckboxButton } from '../components/module_checkbox_button';

type Props = {
  modules: LogModule[]
}

type State = typeof initState;
const initState = {
  open: false,
  selected: new Array<LogModule>()
}

export class Modules extends React.Component<Props, State> {
  state = initState;

  toggleModule = (mod: LogModule) => {
    const index = this.state.selected.indexOf(mod);
    if (index <= -1) {
      this.setState({ ...this.state, selected: [...this.state.selected, mod] });
    } else {
      // clone arr
      const cloneState = Object.assign([], this.state.selected);
      cloneState.splice(index, 1);
      this.setState({ ...this.state, selected: cloneState });
    }
  };
  toggle = () => this.setState({ ...this.state, open: !this.state.open });

  createList = (modules: LogModule[]) => {
    const modulesArr: any[] = [];
    modules.forEach((mod, key) => {
      modulesArr.push(<ModuleCheckboxButton key={key} module={mod} onClick={() => this.toggleModule(mod)} />);
    });
    return modulesArr;
  }

  render() {
    return (
      <Sidebar open={this.state.open} title="Header">
        <h3>All modules</h3>
        <ul>
          {this.createList(this.props.modules)}
        </ul>
        <h3>Selected</h3>
        <ul>
          {this.createList(this.state.selected)}
        </ul>
      </Sidebar>
    );
  }
}

export default Modules;