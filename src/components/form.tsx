import * as React from 'react';

type Props = {
    addItem: (val: string) => {}
}

type State = {
    value: string
}

export class Form extends React.Component<Props, State> {
    submit(input: any) {
        this.props.addItem(input.value);
        input.value = "";
    }

    render() {
        let input: any;
        return (<div>
            <input ref={(ref) => { input = ref }} onKeyDown={(e) => e.key === "Enter" ? this.submit(input) : null} />
            <button onClick={() => this.submit(input)}>Vložit</button>
        </div >);
    }
};

export default Form;