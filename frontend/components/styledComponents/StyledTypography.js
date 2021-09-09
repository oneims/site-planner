import styled, { css } from "styled-components";
import { theme } from "../../styles/ThemeConfig.js";

const { colors } = theme;

export const StyledLabel = styled.span`
  display: block;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const StyledSubtitle = styled.p`
  ${(props) => (props.themeStyle === "gray" ? `color: ${props.theme.colors.gray}` : ``)};
  font-size: 1.125rem;
  @media (min-width: 768px) {
    font-size: 1.35rem;
  }
`;

export const StyledHeadingOne = styled.h1`
  ${(props) => (props.themeStyle === "primary" ? `color: ${props.theme.colors.primary}` : ``)};
  @media (min-width: 992px) {
    font-size: 3.5rem;
  }
  ${(props) =>
    props.themeStyle === "small"
      ? css`
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

export const StyledAppHeading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.appHeadings};
`;

export const StyledAppHeadingLabel = styled.h2`
  font-size: 1.45rem;
  ${(props) =>
    props.themeStyle === "small"
      ? css`
          font-size: 1.25rem;
        `
      : ``};
  color: ${colors.appHeadings};
  font-weight: 600;
`;

export const StyledAppContentTypography = styled.div`
  font-size: 0.9rem;
  color: ${colors.appBody};
`;

export const StyledTag = styled.span`
  font-weight: 700;
  font-size: 0.8rem;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  border: 2px solid ${theme.colors.borderColor};
  vertical-align: inherit;
  hyphens: manual;
  border-radius: 3px;
  line-height: 20px;
  min-height: 20px;
  background-color: #eaf0f6;
  padding: 3px 8px;
  display: inline-block;
  ${(props) =>
    props.themeStyle === "uppercase"
      ? css`
          text-transform: uppercase;
        `
      : ``};
`;
