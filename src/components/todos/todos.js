import React from 'react';
import AddTodo from './addTodo';
import TodoList from './TodoList';

export default () => {
	return (
			<div className="todos">
				<AddTodo />
				<TodoList />
			</div>
	);
}