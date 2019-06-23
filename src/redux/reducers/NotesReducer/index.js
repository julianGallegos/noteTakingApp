import { fromJS } from 'immutable';

const initialState = {
  allNotes: []
}

export const NotesReducer = (state = fromJS(initialState), action) => {
  let newState;
    switch (action.type) {
      case 'SET_ALL_NOTES':
        newState = state.set('allNotes', fromJS(action.data));
        return newState
      default:
        return state
  }
}

export default NotesReducer
