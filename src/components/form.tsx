import * as React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label, FormText } from 'reactstrap';

type Props = {
    addItem: (val: string) => {}
}

const initState = {
    valid: false
}

type State = typeof initState;

export class Form extends React.Component<Props, State> {
    state = initState;

    input: HTMLInputElement;
    submit() {
        if (this.input.value !== '') {
            this.props.addItem(this.input.value);
            this.test();
        }
        this.input.value = "";
    }

    timeout: NodeJS.Timeout;
    test() {
        clearTimeout(this.timeout);
        this.setState({ valid: true });
        this.timeout = setTimeout(() => this.setState({ valid: false }), 2000);
    }

    render() {
        return (<div>
            <Label>Nova poznamka</Label>
            <InputGroup>
                <Input valid={this.state.valid} innerRef={ref => { this.input = ref }} onKeyDown={e => e.key === "Enter" && this.submit()} />
                <InputGroupAddon addonType="prepend"><Button color="primary" onClick={() => this.submit()}>Vlozit</Button></InputGroupAddon>
            </InputGroup>
            <FormText>Zde muzete vlozit novou poznamku.</FormText>
        </div >);
    }
};

export default Form;