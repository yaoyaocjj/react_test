import React from 'react';
import { FilterTypes } from '../../constants';
import { bindActionCreators } from 'redux';
import { toggleTodo, removeTodo} from '../../actions/TodoAction';
import { connect } from 'react-redux';
import TodoItem from './todoItem.js';

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
	return (
			<ul className="todo-list">
				{
					todos.map((item) => (
							<TodoItem
								key={item.id}
								text={item.text}
								completed={item.completed}
								onToggle={() => onToggleTodo(item.id)}
								onRemove={() => onRemoveTodo(item.id)}
							/>
					))
				}
			</ul>
	)
};

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('unsupported filter');
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleTodo,
  OnRemoveTodo: removeTodo
},dispatch);

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);