import styled from 'styled-components';

const GridContainer = styled.div`
	display: grid;
	gap: 1.5rem;
	/* grid-auto-columns: 1fr; */
	grid-template-areas:
		'one one two five'
		'three four four five';	
	/* 'one'
		'two'
		'three'
		'four'
		'five'; */
	@media (min-width: 50em) {
		grid-template-areas:
			'one'
			'two'
			'three'
			'four'
			'five';
			/* 'one one two five'
			'three four four five'; */
			
	}
`;

export { GridContainer };