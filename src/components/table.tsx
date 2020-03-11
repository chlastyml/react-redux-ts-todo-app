import * as React from 'react';
import { Table } from 'reactstrap';
import { Logs } from '../classes/Logs';
import '../styles/table.scss';
import { LogModule } from '../classes/LogModule';

type Props = {
    logs: Logs
}

function ModuleCube(props: { name: string, color: string }) {
    return <div className='module' title={props.name} style={{backgroundColor: props.color}} />;
}

export class GridData extends React.Component<Props> {
    createModuleCube = (modules: LogModule[]) => {
        if (modules.length === 0) return <React.Fragment />
        const allModules = [];
        for (let i = 0; i < modules.length; i++) {
            allModules.push(<ModuleCube key={i} name={modules[i].name} color={modules[i].color.HUE}/>);
        }
        return allModules;
    }
    createTableBody = () => {
        const table: any[] = []
        this.props.logs.Messages.forEach((message, key) => {
            table.push(<tr key={key}>
                <th scope="row">{key}</th>
                <td title={message.date}>{message.time}</td>
                <td>{message.level}</td>
                <td>{this.createModuleCube(message.modules)}</td>
                <td title={message.text}><div className="cut-text">{message.shortText}</div></td>
            </tr>)
        });
        return table;
    }

    createTable = () => {
        return (<Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Level</th>
                    <th>Mods</th>
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
