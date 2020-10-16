import styled from 'styled-components';

const Input = styled.input`
	padding: ${({theme}) => theme.fontSize.xs};
	border: none;
	border-radius: 2px;
	width: 100%;
	background-color: ${({theme}) => theme.backgroundColor.white};
	font-size: ${({theme}) => theme.fontSize.m};
	color: ${({theme}) => theme.fontColor.black};
	transition: 0.25s;

	&:focus {
		outline: none;
		box-shadow: 0px 0px 5px 0px ${({theme}) => theme.fontColor.white};
	}
	&::placeholder {
		color: ${({theme}) => theme.fontColor.grey};
	}
`;

export default Input;
