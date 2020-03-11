import * as React from 'react';
import '../styles/layout.scss';
import { Navbar, Nav, NavItem, Button, NavbarText } from 'reactstrap';
import { Modules } from "./modules";
import { Logs } from '../classes/Logs';
import { ModalExample } from './open';
import { GridData } from '../components/table';

type Props = {
};

const initState = {
  logs: new Logs('')
};

type State = typeof initState;

export class App extends React.Component<Props, State> {
  state = initState;
  modal = React.createRef<ModalExample>();
  moduleSidePanel = React.createRef<Modules>();
  fileReader: FileReader;

  toggleSidebar = () => this.moduleSidePanel.current.toggle();
  openModalOpenPage = () => this.modal.current.setState({ open: !this.modal.current.state.open });
  handleFileRead = () => {
    const result = this.fileReader.result.toString();
    const logs = new Logs(result);
    this.setState({ logs });
  }
  test(file: File) {
    this.fileReader = new FileReader();
    this.fileReader.onload = this.handleFileRead;
    this.fileReader.readAsText(file);
  }

  render() {
    return (
      <div id="main">
        <ModalExample ref={this.modal} onFile={this.test.bind(this)} />
        <div id='layout'>
          <Modules ref={this.moduleSidePanel} modules={this.state.logs.Modules} />
          <div id='main'>
            <div className='header'>
              <h3 className='title'>Main header</h3>
              <Navbar color="light" light expand="md">
                <Nav className="mr-auto" navbar>
                  {this.state.logs.Modules.length !== 0 ? <NavItem><Button color="info" onClick={this.toggleSidebar}>Modules</Button></NavItem> : <React.Fragment />}
                  <NavItem><Button color="primary" onClick={() => this.openModalOpenPage()}>Open</Button></NavItem>
                </Nav>
                <NavbarText title="Created by Tomas Kacalek">Logger</NavbarText>
              </Navbar>
            </div>
            <div className='content'>
              <GridData logs={this.state.logs} />
            </div>
          </div>
        </div>
      </div>);
  }
};

export default App;