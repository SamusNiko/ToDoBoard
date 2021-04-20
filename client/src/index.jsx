import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TaskStore from './store/TaskStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{tasks: new TaskStore()}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider >,
  document.getElementById('root')
);

