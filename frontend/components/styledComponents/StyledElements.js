import styled from "styled-components";
import { darken, lighten } from "polished";
import { theme } from "../../styles/ThemeConfig.js";

// ***Elements
export const StyledButton = styled.button`
  padding: 0.6rem 1.25rem;
  width: auto;
  cursor: pointer;
  color: #fff;
  border: none;
  outline: none;
  border-radius: ${theme.defaultBorderRadius};
  font-weight: 600;
  background-color: ${(props) =>
    props.themeStyle === "secondary" ? props.theme.colors.secondary : props.theme.colors.primary};
  transition: 0.2s ease;
  &:hover {
    background-color: ${(props) =>
      props.themeStyle === "secondary"
        ? darken(props.theme.hoverIntensity, props.theme.colors.secondary)
        : darken(props.theme.hoverIntensity, props.theme.colors.primary)};
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

export const StyledPrivateButton = styled.button`
  background-color: ${theme.colors.appButtonBackground};
  border-color: ${theme.colors.appButtonBorder};
  color: ${theme.colors.appButtonText};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: 400;
  text-align: center;
  user-select: none;
  font-size: 0.85rem;
  transition: all 0.15s ease-out;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0.45rem 1rem;
  &:active {
    transform: scale(1.04);
    background-color: ${lighten(0.1, theme.colors.appButtonBackground)};
  }
  &:hover {
    transition: all 0.15s ease-out;
    background-color: ${darken(0.05, theme.colors.appButtonBackground)};
  }
  ${(props) =>
    props.themeState === "disabled"
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
    color: ${(props) => props.theme.colors.primary};
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
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 4px 1px rgb(129 140 248 / 30%),
      0 0 0 1px ${(props) => props.theme.colors.primary};
    outline: 0;
  }
`;

// React Select
export const ColorStyles = {
  control: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: "#f5f8fa",
      minHeight: "40px",
      fontWeight: "700",
      fontSize: "1.15rem",
      borderColor: isFocused ? theme.colors.primary : `hsl(0, 0%, 80%)`,
      boxShadow: isFocused ? `0 0 0 1px ${theme.colors.primary}` : null,
    };
  },
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
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? theme.colors.primary
        : isFocused
        ? `#eee`
        : null,
      color: isDisabled ? "#ccc" : isSelected ? (10 > 2 ? "white" : "black") : `#000`,
      cursor: isDisabled ? "not-allowed" : "default",
      borderColor: isFocused ? theme.colors.primary : null,
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? theme.colors.primary : "#eee"),
      },
    };
  },
};
