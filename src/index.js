import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserTable from './UserTable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redusers/reducer';

const store = createStore(reducer);

ReactDOM.render( 
  <Provider store={store} >
    <UserTable />
  </Provider>,
  document.getElementById('root'));