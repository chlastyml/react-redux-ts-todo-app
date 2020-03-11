import * as React from 'react';
import { Button } from 'reactstrap';

type Props = {
  onClick?: (e: React.MouseEvent<any, MouseEvent>) => void,
  style?: React.CSSProperties,
  id?: string,
  title?: string
}

type State = typeof initState;
const initState = {
  clicked: false
}

export class CheckboxButton extends React.Component<Props, State> {
  state = initState;
  click = (e: React.MouseEvent<any, MouseEvent>) => {
    console.log((this.state.clicked ? 'Unclicked' : 'Clicked') + ' on ' + this.props.children);
    this.setState({ ...this.state, clicked: !this.state.clicked })
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  render() {
    const { id, title, style, children } = this.props;
    return (
      <Button id={id} title={title} style={style} className={this.state.clicked ? 'clicked' : ''} onClick={this.click}>{children}</Button>
    );
  }
};

export default CheckboxButton;