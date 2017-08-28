import React from 'react';
import Todos from './components/todos/todos';
import Filter from './components/filter/filter';
import TestCrop from './testCrop';

const TodoApp = () => (
  <div>
    <Todos />
    <Filter />
    <TestCrop />
  </div>
);

export default TodoApp;
