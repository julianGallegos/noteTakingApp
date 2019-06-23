import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk';
import NotesReducer from '../redux/reducers/NotesReducer';

export default function configureStore(initialState = {}) {
  const middlewares = [thunk, thunkMiddleware(initialState)];
  const composeEnhancers = typeof window === 'object'
      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(
    NotesReducer,
    applyMiddleware(thunk)
    // composeEnhancers(enhancer)
  )
  return store;
}
