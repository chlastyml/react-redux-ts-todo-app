import * as React from 'react';
import { Table, CustomInput } from 'reactstrap';
import { Logs } from '../classes/Logs';
import '../css/table.css';

type Props = {
}

const initState = {
    logs: new Logs('')
}

type State = typeof initState;

export class GridData extends React.Component<Props, State> {
    state = initState;

    fileReader: FileReader;
    handleFileRead = () => {
        const result = this.fileReader.result.toString();

        const logs = new Logs(result);
        this.setState({ logs });
    }

    uploadFileButton = (file: File) => {
        this.fileReader = new FileReader();
        this.fileReader.onload = this.handleFileRead;
        this.fileReader.readAsText(file);
    }

    createTable = () => {
        const table: any[] = []
        this.state.logs.Messages.forEach((message, key) => {
            table.push(<tr key={key}>
                <th scope="row">{key}</th>
                <td>{message.timestamp}</td>
                <td>{message.level}</td>
                <td>{message.moduls}</td>
                <td>{message.shortText}</td>
            </tr>)
        });
        return table;
    }

    fileUpload: any;
    render() {
        return (
            <div>
                <CustomInput id='upload' accept='.log' type="file" onChange={e => this.uploadFileButton(e.target.files[0])} />
                <Table responsive dark size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Time</th>
                            <th>Level</th>
                            <th>Module</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
};

export default GridData;