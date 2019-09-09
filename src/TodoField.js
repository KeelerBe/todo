import React from 'react'

class TodoField extends React.Component { 
	state = {
		value: this.props.value
	}

	ComponentWillReceiveProps(update) {
		this.setState({value: update.value})
	}

	handleInputChange = (e) => {
		const value = e.target.value
		this.setState({ value })
		this.props.onChange({ value })
	}

	render() {
		return (
			<div id="field">
				<form onSubmit={this.props.onSubmit}>
					<input id="todo-input"
						placeholder="new todo"
						value={this.state.value}
						onChange={this.handleInputChange}
					/>
					<input id="submit" type="Submit"/>
				</form>
			</div>
		)
	}
}

export default TodoField