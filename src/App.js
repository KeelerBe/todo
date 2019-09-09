import React from 'react'
import TodoField from './TodoField'
import TodoList from './TodoList'

const myTodos = ["todo app", "weather app", "budget tracker", "e-commerce app"]

class App extends React.Component {
	state = {
		todo: "",
		todos: []
	}

	componentDidMount() {
		this.setState({
			todos: myTodos
		})
	}
	
	handleTodoFieldChange = ({ value }) => {
		this.setState({todo: value})
	}

	handleFormSubmit = (e) => {
		e.preventDefault()
		
		const todos = [...this.state.todos, this.state.todo]

		this.setState({
			todos: todos,
			todo: ""
		})
	}

	handleTrashClick = (todo) => {
		const todos = this.state.todos
		this.setState({
			todos: todos.filter((t) => t !== todo)
		})
	}

	render() {
		return (
		  <div>
				<TodoField
					value={this.state.todo}
					onChange={this.handleTodoFieldChange} 
					onSubmit={this.handleFormSubmit}
				/>
				<TodoList 
					todos={this.state.todos}
					onClick={this.handleTrashClick}
				/>
			</div>
		)
	}
}

export default App