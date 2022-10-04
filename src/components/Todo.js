const Todo = ({ todo }) => {
	return (
		<>
			<label>
				<div>
					<input type="checkbox" checked={todo.fulfilled} />
					{todo.name}
				</div>
			</label>
		</>
	);
};

export default Todo;
