import React, { memo } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import CloseButton from "./CloseButton";
import CheckInput from "./CheckInput";
import { darkGrey } from "../utilities";

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

const TodoItem = memo(({ id, checked, task, dispatch }) => {
	console.log("rendering...");
	return (
		<StyledTodo className={checked ? "checked" : ""}>
			<CheckInput
				name={id}
				checked={checked}
				onChange={() => {
					dispatch({ type: "TOGGLE_TODO", id: id });
				}}
			/>
			<div>{task}</div>
			<CloseButton onClick={() => dispatch({ type: "DELETE_TODO", id: id })} />
		</StyledTodo>
	);
});

export default TodoItem;
