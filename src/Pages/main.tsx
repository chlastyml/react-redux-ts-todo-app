import * as React from 'react';
import { Store } from 'redux';

import GridData from '../components/table';
import NavBar from "../components/navbar";

import ModalExample from "./open";
import { Button } from 'reactstrap';
import Logs from '../classes/Logs';

type Props = {
    store: Store,
    removeItem: (id: number) => {},
    addItem: (text: string) => {}
};

const initState = {
    logs: new Logs('')
};

type State = typeof initState;

export class App extends React.Component<Props, State> {
    state = initState;
    modal = React.createRef<ModalExample>();
    fileReader: FileReader;

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
        const toggle = () => this.modal.current.setState({ open: !this.modal.current.state.open });
        return (
            <div id="main">
                <ModalExample ref={this.modal} onFile={this.test.bind(this)} />
                <NavBar modules={this.state.logs.Modules} openModal={toggle}></NavBar>
                <GridData logs={this.state.logs}></GridData>
            </div>);
    }
};

export default App;