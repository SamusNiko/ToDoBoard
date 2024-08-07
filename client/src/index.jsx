import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TaskStore from './store/TaskStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{ tasks: new TaskStore(), myUser: UserStore }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider >,
  document.getElementById('root')
);

