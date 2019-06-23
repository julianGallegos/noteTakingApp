import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NoteTakingContainer from '../NoteTakingContainer';

const App = (props) => {
  return (
    <Provider store={ props.store }>
      <NoteTakingContainer />
    </Provider>
  )
}

export default App;
