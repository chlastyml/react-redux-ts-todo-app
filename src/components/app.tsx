import * as React from 'react';
import { Store } from 'redux';

import { Item } from './item';
import { Form } from './form';

type Props = {
  store: Store,
  removeItem: (id: number) => {},
  addItem: (text: string) => {}
};

type State = {
  todos: string[]
};

export class App extends React.Component<Props, State> {
  // uložíme data pro renderování do 'state', render se zavolá automaticky
  updateState() {
    const todos = this.props.store.getState();
    this.setState({ todos });
  }

  // okamžik v životním cyklu komponenty před prvním renderováním
  componentDidMount() {
    this.updateState() // úvodní načtení stavu
    this.props.store.subscribe(this.updateState.bind(this)); // aktualizace stavu
  }

  render() {
    // vytvoříme pro každou todo položku její DOM vyjádření
    const items = this.state ? this.state.todos.map((todo, id) => <Item key={id} text={todo} removeItem={() => this.props.removeItem(id)} />) : [];

    // vykreslíme komponenty
    return (
      <div id="main" style={{ width: "800px", margin: "0 auto" }}>
        <Form addItem={this.props.addItem} />
        <ul>{items}</ul>
      </div>);
  }
};

export default App;