import * as React from 'react';

type Props = {
  text: string,
  removeItem: () => {}
}

export class Item extends React.Component<Props> {
  render() {
    return <li>{this.props.text} <button onClick={this.props.removeItem}>✖</button></li>;
  }
};

export default Item;