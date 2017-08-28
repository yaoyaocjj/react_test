import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import Store from '../Store';
import { render } from 'react-dom';

const store = Store();
render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
