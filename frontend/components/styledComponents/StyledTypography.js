import styled from "styled-components";

export const StyledLabel = styled.span`
  display: block;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const StyledSubtitle = styled.p`
  ${(props) => (props.themeStyle === "gray" ? `color: ${props.theme.gray}` : ``)};
  font-size: 1.125rem;
  @media (min-width: 768px) {
    font-size: 1.35rem;
  }
`;

export const StyledHeadingOne = styled.h1`
  ${(props) => (props.themeStyle === "primary" ? `color: ${props.theme.primary}` : ``)};
  @media (min-width: 992px) {
    font-size: 3.5rem;
  }
  ${(props) =>
    props.themeStyle === "small"
      ? `
  @media (min-width: 992px) {
    font-size: 2.25rem;
  }
  
  `
      : ``};
`;

export const StyledHeadingTwo = styled.h2`
  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;
export const StyledHeadingThree = styled.h3`
  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

export const StyledHeadingFour = styled.h4`
  @media (min-width: 992px) {
    font-size: 2rem;
  }
`;

export const StyledHeadingFive = styled.h5`
  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const StyledHeadingSix = styled.h6`
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;
