import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { todo } from "./reducers/todo";
import App from './components/app';
import { TodoActions } from './enums';

const store = createStore(todo);

const removeItem = (id: number) => store.dispatch({ type: TodoActions.REMOVE, id });
const addItem = (text: string) => store.dispatch({ type: TodoActions.ADD, text });

ReactDOM.render(<App addItem={addItem} removeItem={removeItem} store={store} />, document.getElementById("root"));