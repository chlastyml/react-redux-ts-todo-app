import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput } from 'reactstrap';

type Props = {
    onFile: (file: File) => void
}

const initState = {
    open: false
}

type State = typeof initState;

class ModalExample extends React.Component<Props, State>{
    state = initState;

    toggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const toggle = this.toggle.bind(this);
        return (
            <div>
                <Modal isOpen={this.state.open} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Open new file</ModalHeader>
                    <ModalBody>
                        <CustomInput id='upload' accept='.log' type="file" onChange={e => {
                            this.props.onFile(e.target.files[0]);
                            this.toggle();
                        }} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;