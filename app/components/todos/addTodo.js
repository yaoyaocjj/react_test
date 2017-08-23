import React from 'react';


class addTodo extends React.Component {
	constructor(props) {
		super(props);
	}

	refInput(node) {
		this.input = node;
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
						<input className="new-todo" ref={this.refInput} />
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

export default connect(null, mapDispatchToProps)(addTodo);
