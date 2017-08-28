import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../../actions/TodoAction';

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.refInput = this.refInput.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	refInput(text) {
		this.input = text;
	}

  onSubmit(event) {
    event.preventDefault();

    const input = this.input;
    if (!input.value.trim()) {
      return;
    }

    this.props.onAdd(input.value);
    input.value = '';
  }


	render() {
		return (
				<div className="add-todo">
					<form onSubmit={this.onSubmit}>
						<input className="new-todo" ref={this.refInput} type="text"/>
						<button className="add-btn" type="submit">添加</button>
					</form>
				</div>
		)
	}
}

addTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);
