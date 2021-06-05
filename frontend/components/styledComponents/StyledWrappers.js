import styled from "styled-components";

// ***Wrappers

export const StyledContentBox = styled.div`
  position: relative;
  ${(props) => (props.maxWidth == "500" ? `max-width: 500px;` : ``)};
  ${(props) => (props.maxWidth == "600" ? `max-width: 600px;` : ``)};
  ${(props) => (props.maxWidth == "700" ? `max-width: 700px;` : ``)};
  ${(props) => (props.maxWidth == "800" ? `max-width: 800px;` : ``)};
  ${(props) => (props.maxWidth == "900" ? `max-width: 900px;` : ``)};
  ${(props) => (props.maxWidth == "1000" ? `max-width: 1000px;` : ``)};
  ${(props) => (props.maxWidth == "1100" ? `max-width: 1100px;` : ``)};
`;

export const StyledSection = styled.section`
  padding: 2.832187rem 0;
  @media (min-width: 768px) {
    padding: 5.23312rem 0;
  }
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.themeStyle == "large"
      ? `padding: 4rem 0; @media (min-width: 768px) {padding: 7rem 0;}`
      : ``};
  ${(props) =>
    props.themeStyle == "small"
      ? `padding: 2rem 0; @media (min-width: 768px) {padding: 3rem 0;}`
      : ``};
  ${(props) => (props.themeStyle == "removePadding" ? `padding: 0 !important;` : ``)};
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  height: 400px;
  ${(props) => (props.maxHeight == "300" ? `height: 300px;` : ``)};
  ${(props) => (props.maxHeight == "400" ? `height: 400px;` : ``)};
  ${(props) => (props.maxHeight == "500" ? `height: 500px;` : ``)};
  ${(props) => (props.maxHeight == "600" ? `height: 600px;` : ``)};
  ${(props) => (props.maxHeight == "700" ? `height: 700px;` : ``)};
  ${(props) => (props.maxHeight == "800" ? `height: 800px;` : ``)};
  ${(props) => (props.maxHeight == "900" ? `height: 900px;` : ``)};
  ${(props) => (props.maxHeight == "1000" ? `height: 1000px;` : ``)};
  ${(props) => (props.maxHeight == "1100" ? `height: 1100px;` : ``)};
`;
