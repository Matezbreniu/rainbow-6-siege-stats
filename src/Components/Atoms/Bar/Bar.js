import styled from 'styled-components';

const Bar = styled.div`
	width: 100%;
	background-color: ${({theme, color = 'grey1'}) =>
		theme.backgroundColor[color]};
	color: ${({theme}) => theme.fontColor.black};
	font-weight: ${({theme}) => theme.fontWeight.bold};
	padding: 0.5rem;
	text-transform: uppercase;
`;

export default Bar;
