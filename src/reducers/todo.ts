import { TodoActions } from '../enums';
import { initialState } from "./initState";

export function todo(state = initialState, action: any): string[] {
    switch (action.type) {
        case TodoActions.ADD:
            return [...state, action.text];
        case TodoActions.REMOVE:
            const newState = [...state];
            newState.splice(action.id, 1);
            return newState;
        case TodoActions.REMOVE_ALL:
            return [];
        default:
            return state;
    }
}

export default todo;