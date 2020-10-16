import styled from 'styled-components';

const Paragraph = styled.p`
	color: ${({theme, color = 'white'}) => theme.fontColor[color]};
	font-weight: ${({theme}) => theme.fontWeight.bold};
	font-size: ${({theme, size = 'l'}) => theme.fontSize[size]};
	text-transform: ${({uppercase}) => uppercase && 'uppercase'};
`;

export default Paragraph;
