import Todo from "./Todo";
import "../stylesheets/Todos.css";

function Todos({ todos, toggleTodo }) {
	return (
		<>
			<div className="todos-container">
				{todos.map((todo) => (
					<Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
				))}
			</div>
		</>
	);
}

export default Todos;
