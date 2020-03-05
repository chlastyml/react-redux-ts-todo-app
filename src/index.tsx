import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { todo } from "./reducers/todo";
import App from './Pages/main';
import { TodoActions } from './enums';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(todo);

const removeItem = (id: number) => store.dispatch({ type: TodoActions.REMOVE, id });
const addItem = (text: string) => store.dispatch({ type: TodoActions.ADD, text });

ReactDOM.render(<App addItem={addItem} removeItem={removeItem} store={store} />, document.getElementById("root"));