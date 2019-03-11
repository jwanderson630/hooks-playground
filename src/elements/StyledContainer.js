import styled from "styled-components";

const StyledContainer = styled.div`
	margin-top: 20px;
	font-size: 1.8rem;
	line-height: 1.5;
	text-align: left;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05),
		1px 1px 10px 2px rgba(0, 0, 0, 0.07);
	border-radius: 0.4rem;
	padding: 2.5rem 1.5rem;
	position: relative;
	user-select: none;
	:before {
		${props => `content: "${props.label ? props.label : ""}"`};
		font-size: 1.4rem;
		position: absolute;
		top: -1.2rem;
		padding: 0 0.5rem;
		left: 1.3rem;
		background-color: #27ae60;
		color: white;
		border-radius: 0.4rem;
		box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.07);
	}
`;

export default StyledContainer;
