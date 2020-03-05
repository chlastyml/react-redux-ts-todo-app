import * as React from 'react';
import { Table, CustomInput } from 'reactstrap';
import { Logs } from '../classes/Logs';
import '../css/table.css';

type Props = {
    logs: Logs
}

export class GridData extends React.Component<Props> {
    createTableBody = () => {
        const table: any[] = []
        this.props.logs.Messages.forEach((message, key) => {
            console.log('message.moduls :', message.moduls);
            table.push(<tr key={key}>
                <th scope="row">{key}</th>
                <td title={message.date}>{message.time}</td>
                <td>{message.level}</td>
                <td>{message.moduls.join(' ')}</td>
                <td title={message.text}><div className="cut-text">{message.shortText}</div></td>
            </tr>)
        });
        return table;
    }

    createTable = () => {
        return (<Table responsive size="sm">
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
                {this.createTableBody()}
            </tbody>
        </Table>);
    }

    fileUpload: any;
    render() {
        return (
            <div>
                {this.props.logs.Messages.length !== 0 ? this.createTable() : <div>NO DATA!</div>}
            </div>
        );
    }
};

export default GridData;