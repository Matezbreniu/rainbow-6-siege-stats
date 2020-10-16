import styled from 'styled-components';

const Heading = styled.h1`
	color: ${({theme}) => theme.fontColor.white};
	font-weight: ${({theme}) => theme.fontWeight.bold};
	font-size: ${({theme, size = 'xl'}) => theme.fontSize[size]};
`;

export default Heading;
