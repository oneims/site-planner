import styled from "styled-components";

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
      props.themeStyle === "secondary" ? props.theme.secondaryHover : props.theme.primaryHover};
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
