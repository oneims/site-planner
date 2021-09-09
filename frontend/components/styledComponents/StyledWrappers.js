import styled, { css } from "styled-components";

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

// App
export const StyledAppWrapper = styled.section`
  margin: 2rem 0;
`;

export const StyledAppContent = styled.div`
  display: flex;
  margin-left: -8px;
  margin-right: -8px;
`;

export const StyledAppBlock = styled.div`
  padding: 1.25rem 0;
  overflow: hidden;
  position: relative;
`;

export const StyledAsideWrapper = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  transition: 0.25s ease;
  ${(props) =>
    props.themeStyle === "expanded"
      ? css`
          max-width: 100%;
        `
      : css`
          max-width: 450px;
        `};
`;

export const StyledViewPortWrapper = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  max-width: calc(100% - 450px);
  transition: 0.25s ease;
  ${(props) =>
    props.themeStyle === "collapsed"
      ? css`
          width: 0;
          opacity: 0;
          padding: 0;
        `
      : css``};
  ${(props) =>
    props.themeStyle === "fullWidth"
      ? css`
          max-width: 100%;
        `
      : css``};
`;

export const StyledAside = styled.aside`
  width: 100%;
  height: 80vh;
  background-color: #f7f9fb;
  border-radius: 15px;
  border: 2px solid #eee;
`;

export const StyledPannel = styled.div`
  transition: 0.25s ease;
  ${(props) =>
    props.themeStyle === "topCurved"
      ? css`
          border-top-right-radius: 15px;
          border-top-left-radius: 15px;
        `
      : ``};
  ${(props) =>
    props.displayStyle === "expanded"
      ? css`
          padding-top: 0.5rem !important;
          padding-bottom: 0.5rem !important;
          transition: 0.25s ease;
        `
      : ``};
`;

export const StyledViewPort = styled.div`
  width: 100%;
  background-color: #f7f9fb;
  border-radius: 15px;
  height: 80vh;
  overflow-y: scroll;
  border: 2px solid #eee;
`;
