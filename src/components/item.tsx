import * as React from 'react';
import { Button } from 'reactstrap';

type Props = {
  text: string,
  removeItem: () => {}
}

export class Item extends React.Component<Props> {
  render() {
    return <li><Button onClick={this.props.removeItem}>✖</Button> {this.props.text}</li>;
  }
};

export default Item;