import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Todos from "./components/Todos";
import "./stylesheets/App.css";

const LOCAL_STORAGE_KEY = "todo-list.todos";

function App() {
	const [todos, setTodos] = useState([]);
	const inputEl = useRef(null);

	// get/set local storage so that todos persist (notice how the "get" useEffect is before the "set" useEffect)
	useEffect(() => {
		const getTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

		if (getTodos.length > 0) setTodos(getTodos);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	function addTodo() {
		const todo = inputEl.current.value;

		// if input is empty
		if (todo === "") return;

		setTodos((prevTodos) => {
			return [...prevTodos, { id: uuidv4(), name: todo, fulfilled: false }];
		});

		// reset/clear input value
		inputEl.current.value = null;
	}

	function toggleTodo(id) {
		// in order to avoid the direct modification of original todos list
		const copyTodos = [...todos];

		const todo = copyTodos.find((todo) => todo.id === id);
		todo.fulfilled = !todo.fulfilled;
		setTodos(copyTodos);
	}

	function clearTodos() {
		const clearedTodos = todos.filter((todo) => !todo.fulfilled);

		setTodos(clearedTodos);
	}

	return (
		<>
			<div className="app-container">
				<div className="app-wrapper">
					<h1 className="app-title">"Hunny, Do..." List</h1>
					<Todos toggleTodo={toggleTodo} todos={todos} />
					<input className="app-input" type="text" ref={inputEl} />
					<div className="app-buttons">
						<button className="app-button-ind" onClick={addTodo}>
							Add Task
						</button>
						<button className="app-button-ind" onClick={clearTodos}>
							Clear Fulfilled Task(s)
						</button>
					</div>
					<div className="app-remainingTasks">
						{todos.filter((todo) => !todo.fulfilled).length} Remaining
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
