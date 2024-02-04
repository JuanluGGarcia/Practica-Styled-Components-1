import styled from 'styled-components';

// const StyledWrapper = styled.div`
// 	 @media screen and (min-width: 768px){
// 		display: grid;
// 		grid-template-areas:
// 			'one'   'one'  'two' 'five'
// 			'three' 'four' 'four''five';
//   }  
// `;

const StyledCardContainer = styled.div`

	background-color: ${props => props.$bgColor};
	color: ${props => props.$foreColor};
	border-radius: 5px;
	padding: 2rem;
`;

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const StyledImage = styled.div`
	width: 2rem;
	border-radius: 50%;
`;

const StyledUser = styled.div``;

const StyleName = styled.p`
	font-weight: bold;
	font-size: 13px;
`;

const StyleVerified = styled.p`
	opacity: 0.5;
	font-size: 11px;
`;

const StyleShortOpinion = styled.h2`
	margin-bottom: 1rem;
	font-size: 1.25rem;
`;

const StyleLongOpinion = styled.h3`
	opacity: 0.5;
	font-size: 13px;
`;

export {
	// StyledWrapper,
	StyledCardContainer,
	StyledHeader,
	StyledImage,
	StyledUser,
	StyleName,
	StyleVerified,
	StyleShortOpinion,
	StyleLongOpinion
};
