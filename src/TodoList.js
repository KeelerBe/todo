import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
	render() {
		return (
			<div>
				<ul className="list-group list-group-flush">
					{
						this.props.todos.map((todo, i) => (
							<Todo 
								key={i} 
								todo={todo} 
								onClick={this.props.onClick}
							/>
						))
					}
				</ul>
			</div>
		)
	}
}

export default TodoList