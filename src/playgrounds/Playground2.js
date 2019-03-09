import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import TextInput from "../elements/TextInput";
import StyledButton from "../elements/StyledButton";
import StyledContainer from "../elements/StyledContainer";
import StyledPlayground from "../elements/StyledPlayground";
import CheckInput from "../elements/CheckInput";
import CloseButton from "../elements/CloseButton";
import { darkGrey } from "../utilities";

const initialState = {
	todos: []
};

function reducer(state, action) {
	switch (action.type) {
	case "add":
		if (!action.newTodo.task) return state;
		return {
			todos: [...state.todos, action.newTodo]
		};
	case "toggle": {
		let updatedTodos = [...state.todos];
		const updatedTodoIndex = state.todos.findIndex(
			todo => todo.id === action.id
		);
		const updatedTodo = { ...state.todos[updatedTodoIndex] };
		updatedTodo.checked = !updatedTodo.checked;
		updatedTodos.splice(updatedTodoIndex, 1, updatedTodo);
		return {
			todos: updatedTodos
		};
	}
	case "delete": {
		const UpdatedTodos = state.todos.filter(todo => todo.id !== action.id);
		return {
			todos: UpdatedTodos
		};
	}
	default:
		throw new Error();
	}
}

const getId = task => `${task}${Math.floor(Math.random() * (999 - 100)) + 100}`;

const StyledInlineForm = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
	grid-gap: 1rem;
`;

const StyledTodo = styled.div`
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-gap: 1rem;
	padding: 1.5rem 0;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	&:last-child {
		padding: 1.5rem 0 0 0;
	}
	&:first-child {
		border-top: 0;
		padding: 0 0 1.5rem 0;
	}
	&:only-child {
		padding: 0;
	}
	&.checked {
		text-decoration: line-through;
		color: ${rgba(darkGrey, 0.5)};
	}
`;

function Playground2() {
	const [newTodo, setNewTodo] = useState("");
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StyledPlayground>
			<h1>Hook 2: useReducer Todo</h1>
			<StyledContainer label="New todo">
				<StyledInlineForm
					onSubmit={e => {
						e.preventDefault();
						setNewTodo("");
						dispatch({
							type: "add",
							newTodo: { task: newTodo, id: getId(newTodo), checked: false }
						});
						e.target[0].focus();
					}}
				>
					<TextInput
						name=""
						value={newTodo}
						onChange={todo => setNewTodo(todo)}
					/>

					<StyledButton disabled={newTodo.length === 0} type="submit">
						Add +
					</StyledButton>
				</StyledInlineForm>
			</StyledContainer>
			<StyledContainer label="Todos">
				{state.todos.map(todo => (
					<StyledTodo key={todo.id} className={todo.checked ? "checked" : ""}>
						<CheckInput
							name={todo.id}
							checked={todo.checked}
							onChange={() => {
								setNewTodo("");
								dispatch({ type: "toggle", id: todo.id });
							}}
						/>
						<div>{todo.task}</div>
						<CloseButton
							onClick={() => dispatch({ type: "delete", id: todo.id })}
						/>
					</StyledTodo>
				))}
			</StyledContainer>
		</StyledPlayground>
	);
}

export default Playground2;
