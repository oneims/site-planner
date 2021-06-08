import styled from "styled-components";
import { darken } from "polished";

const primaryColor = (props) => {
  return props.theme.primary;
};
// ***Elements
export const StyledButton = styled.button`
  padding: 0.6rem 1.25rem;
  width: auto;
  cursor: pointer;
  color: #fff;
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  font-weight: 600;
  background-color: ${(props) =>
    props.themeStyle === "secondary" ? props.theme.secondary : props.theme.primary};
  transition: 0.2s ease;
  &:hover {
    background-color: ${(props) =>
      props.themeStyle === "secondary"
        ? darken(props.theme.hoverIntensity, props.theme.secondary)
        : darken(props.theme.hoverIntensity, props.theme.primary)};
  }
  ${(props) =>
    props.size === "large"
      ? `
        font-size: 1rem;
        @media (min-width: 768px) {
            font-size: 1.35rem;
          }
      `
      : ``};
  ${(props) =>
    props.state === "disabled"
      ? `
        transition: 0.2s ease;
        background-color: #888;
        pointer-events: none;
        color: #fff;
      `
      : ``};
`;

export const StyledLinkButton = styled.button`
  width: auto;
  cursor: pointer;
  color: inherit;
  background: none;
  font-weight: 600;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  transition: 0.2s ease;
  font-size: inherit;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.primary};
    transition: 0.2s ease;
  }
  svg {
    margin-right: 0.25rem;
  }
`;

// App Elements

// Form

export const StyledFormWrapper = styled.div``;

export const StyledFieldWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const StyledField = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    width: ${(props) => (props.themeStyle === "two-column" ? "49%" : "100%")};
    margin-bottom: 0;
  }
`;

export const StyledInput = styled.input`
  padding: 9px 10px;
  border-radius: 3px;
  border: 1px solid #cbd6e2;
  transition: all 0.15s ease-out;
  background-color: #f5f8fa;
  color: #000;
  display: block;
  line-height: 22px;
  text-align: left;
  vertical-align: middle;
  width: 100%;
  font-weight: 700;
  font-size: ${(props) => (props.themeStyle === "large" ? "1.15rem;" : "1rem")};
  &:focus {
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 4px 1px rgb(52 93 238 / 30%), 0 0 0 1px ${(props) => props.theme.primary};
    outline: 0;
  }
`;

// React Select
export const ColorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#f5f8fa",
    minHeight: "40px",
    fontWeight: "700",
    fontSize: "1.15rem",
  }),
  menu: (styles) => ({
    ...styles,
    fontWeight: "700",
    backgroundColor: "#f5f8fa",
  }),
  input: (styles) => ({
    ...styles,
    fontWeight: "700",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    const color = "#345dee";
    return {
      ...styles,
      backgroundColor: isDisabled ? null : isSelected ? color : isFocused ? `#eee` : null,
      color: isDisabled ? "#ccc" : isSelected ? (10 > 2 ? "white" : "black") : `#000`,
      cursor: isDisabled ? "not-allowed" : "default",
      borderColor: isFocused ? color : null,
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? color : "#eee"),
      },
    };
  },
};
