import React from 'react';

import Paragraph from 'Components/Atoms/Paragraph/Paragraph';

const Statistic = ({name, value}) => {
	return (
		<div>
			<Paragraph size='s' color='grey' uppercase={true}>
				{name}
			</Paragraph>
			<Paragraph size='xl'>{value}</Paragraph>
		</div>
	);
};

export default Statistic;
