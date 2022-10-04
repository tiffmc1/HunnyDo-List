function Todo({ todo, toggleTodo }) {
	function handleToggleTodo() {
		toggleTodo(todo.id);
	}

	return (
		<>
			<label>
				<div>
					<input
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
