import styled from "styled-components";

const StyledContainer = styled.div`
	margin-top: 20px;
	font-size: 1.8rem;
	line-height: 1.5;
	text-align: left;
	box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	padding: 1.5rem;
	position: relative;
	user-select: none;
	:before {
		${props => `content: "${props.label}"`};
		font-size: 1.4rem;
		position: absolute;
		top: -1.2rem;
		background-color: white;
		padding: 0 0.5rem;
		left: 1rem;
	}
`;

export default StyledContainer;
