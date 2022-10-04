import Todo from "./Todo";

function Todos({ todos, toggleTodo }) {
	return (
		<>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
			))}
		</>
	);
}

export default Todos;
