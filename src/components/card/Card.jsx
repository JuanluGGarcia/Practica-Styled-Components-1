import {
	// StyledWrapper,
    StyledCardContainer,
	StyledImage,
	StyleLongOpinion,
	StyleName,
	StyleShortOpinion,
	StyleVerified,
	StyledHeader,
	StyledUser
} from './style';

const Card = props => {
	console.log(props);
	return (
		<>
			{/* <StyledWrapper> */}
				<StyledCardContainer $bgColor={props.$bgColor} $foreColor={props.$foreColor}>
					<StyledHeader>
						<StyledImage >
							<img src={props.image} alt='' />
						</StyledImage>
						<StyledUser>
							<StyleName>{props.name}</StyleName>
							<StyleVerified>{props.verified}</StyleVerified>
						</StyledUser>
					</StyledHeader>
					<StyleShortOpinion >{props.shortOpinion}</StyleShortOpinion>
					<StyleLongOpinion>{props.longOpinion}</StyleLongOpinion>
				</StyledCardContainer>
			{/* </StyledWrapper> */}
			
		</>
	);
};

export default Card;