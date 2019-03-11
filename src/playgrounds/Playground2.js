import React, { useState, useReducer, useEffect, useRef } from "react";
import styled from "styled-components";
import TextInput from "../elements/TextInput";
import StyledButton from "../elements/StyledButton";
import StyledContainer from "../elements/StyledContainer";
import StyledPlayground from "../elements/StyledPlayground";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoItem from "../elements/TodoItem";

function reducer(state, action) {
	switch (action.type) {
	case "init": {
		return {
			todos: action.todos,
		};
	}
	case "ADD_TODO":
		if (!action.newTodo.task) return state;
		return {
			todos: [...state.todos, action.newTodo],
		};
	case "TOGGLE_TODO": {
		let updatedTodos = [...state.todos];
		const updatedTodoIndex = state.todos.findIndex(todo => todo.id === action.id);
		const updatedTodo = { ...state.todos[updatedTodoIndex] };
		updatedTodo.checked = !updatedTodo.checked;
		updatedTodos.splice(updatedTodoIndex, 1, updatedTodo);
		return {
			todos: updatedTodos,
		};
	}
	case "DELETE_TODO": {
		const UpdatedTodos = state.todos.filter(todo => todo.id !== action.id);
		return {
			todos: UpdatedTodos,
		};
	}
	default:
		throw new Error();
	}
}

const StyledInlineForm = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
	grid-gap: 1rem;
`;

function Playground2() {
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useLocalStorage("todos", []);
	const [state, dispatch] = useReducer(reducer, { todos: todos });
	const todoId = useRef(0);

	useEffect(() => {
		setTodos(state.todos);
	}, [state.todos]);

	useEffect(() => {
		todoId.current = state.todos.reduce((prev, current) => Math.max(prev, current.id), 0) + 1;
	});

	return (
		<StyledPlayground>
			<h1>Hook 2: Todo list with useReducer</h1>
			<StyledContainer label="New todo">
				<StyledInlineForm
					onSubmit={e => {
						e.preventDefault();
						setNewTodo("");
						dispatch({
							type: "ADD_TODO",
							newTodo: { task: newTodo, id: todoId.current, checked: false },
						});
						e.target[0].focus();
						e.target[0].select();
					}}
				>
					<TextInput name="" value={newTodo} onChange={todo => setNewTodo(todo)} />
					<StyledButton disabled={newTodo.length === 0} type="submit">
						Add +
					</StyledButton>
				</StyledInlineForm>
			</StyledContainer>
			<StyledContainer label="Todos">
				{state.todos.map(({ task, id, checked }) => (
					<TodoItem key={id} task={task} id={id} checked={checked} dispatch={dispatch} />
				))}
			</StyledContainer>
		</StyledPlayground>
	);
}

export default Playground2;
