import React from 'react'

class Todo extends React.Component {
	state = {
		isCompleted: false
	}

	toggleCompleted = () => {
		this.setState((prevState, props) => {
			return {isCompleted: !prevState.isCompleted}
		})
	}

	onTrashClick = (e) => {
		e.stopPropagation()
		this.props.onClick(this.props.todo)
	}
	
	render() {
		return (
			<div className="list-group-item" >
				<span className={this.state.isCompleted ? "completed" : ""}>{this.props.todo}</span>
				<span onClick={this.onTrashClick}><i className="far fa-trash-alt"></i></span>
				<span onClick={this.toggleCompleted}><i className="fas fa-check"></i></span>
			</div>		
		)
	}
}

export default Todo



