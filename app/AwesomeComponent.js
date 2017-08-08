import React from 'react';

export default class AwesomeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {likesCount: 0};
		this.onLike = this.onLike.bind(this);
	}

	onLike() {
		let newLikesCount = this.state.likesCount + 1;
		this.setState({likesCount: newLikesCount});
	}

	render() {
		return (
				<div>
					Likes: <span>{this.state.likesCount}</span>
					<div><button onClick={this.onLike}>Like Me or You</button></div>
				</div>
		);
	}
}
