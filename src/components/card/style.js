import styled from "styled-components";


const StyledCardContainer = styled.div`
    display: grid;
    background-color: ${props => props.$bgColor};
    color: ${props => props.$foreColor};
    /* background-image: url("${props => props.$bgImage}") ; */
    /* background-position: up right; */
    border-radius: 5px;
    padding: 2rem;
    grid-area: ${props => props.$gridArea};
    /* margin-bottom: 1.5rem; */
`;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

const StyledImage = styled.div`
    width: 28px;
    border-radius: 50%;
`;

const StyledUser = styled.div`
    
`;

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

export { StyledCardContainer, StyledHeader, StyledImage, StyledUser, StyleName, StyleVerified, StyleShortOpinion, StyleLongOpinion }