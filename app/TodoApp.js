import React from 'react';
import Todos from './components/todos/todo';
import Filter from './components/filter/filter';

class TodoApp extends React.Component {
  render() {
    return (
        <div>
          <Todos/>
          <Filter/>
        </div>
    )
  }
}

export default TodoApp;
