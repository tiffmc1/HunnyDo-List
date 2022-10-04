import { useState } from "react";
import Todos from "./components/Todos";
// import "./App.css";

function App() {
	const [todos, setTodos] = useState(["dishes", "clean bathroom"]);

	return (
		<>
			<Todos todos={todos} />
			<input type="text" name="todos" />
			<button>Add</button>
			<button>Clear Fulfilled Todos</button>
		</>
	);
}

export default App;
