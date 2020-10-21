import React from 'react';

import {ThemeProvider} from 'styled-components';
import {theme} from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import Card from 'Components/Organisms/Card/Card';

const Root = () => {
	return (
		<div>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Card />
			</ThemeProvider>
		</div>
	);
};

export default Root;
