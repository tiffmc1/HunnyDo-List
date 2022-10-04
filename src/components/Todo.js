import "../stylesheets/Todo.css";

function Todo({ todo, toggleTodo }) {
	function handleToggleTodo() {
		toggleTodo(todo.id);
	}

	return (
		<>
			<label>
				<div className="todo-container">
					<input
						className="todo-checkbox"
						type="checkbox"
						onChange={handleToggleTodo}
						checked={todo.fulfilled}
					/>
					{todo.name}
				</div>
			</label>
		</>
	);
}

export default Todo;
