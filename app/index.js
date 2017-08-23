import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoApp from './TodoApp';

const store = createStore(TodoApp);
render (
		<Provider store={store}>
			<TodoApp />
      <div> test </div>
		</Provider>,
		document.getElementById('root')
);
