import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Todos from "./components/Todos";
// import "./App.css";

function App() {
	const [todos, setTodos] = useState([]);
	const inputEl = useRef(null);

	function addTodo(e) {
		const todo = inputEl.current.value;

		// if input is empty
		if (todo === "") return;

		setTodos((prevTodos) => {
			return [...prevTodos, { id: uuidv4(), name: todo, fulfilled: false }];
		});

		// reset/clear input value
		inputEl.current.value = null;
	}

	return (
		<>
			<Todos todos={todos} />
			<input type="text" ref={inputEl} />
			<button onClick={addTodo}>Add</button>
			<button>Clear Fulfilled Todos</button>
			<div>0 todos left</div>
		</>
	);
}

export default App;
