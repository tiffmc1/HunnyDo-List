import Todo from "./Todo";

const Todos = ({ todos }) => {
	return (
		<>
			{todos.map((todo) => (
				<Todo key={todo} todo={todo} />
			))}
		</>
	);
};

export default Todos;
