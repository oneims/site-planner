import styled from "styled-components";

// ***Header
export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
`;

export const StyledHeaderWrapper = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderColumn = styled.div``;

export const StyledLogoWrapper = styled.div`
  cursor: pointer;
`;

export const StyledLogo = styled.div`
  width: 2.8125rem;
  height: 2.8125rem;
  background: ${(props) => props.theme.colors.primary};
  position: relative;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
`;

export const StyledLogoSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  color: rgb(255, 255, 255);
  font-size: 1.6rem;
  line-height: 1rem;
  padding-top: 0.2rem;
`;

// ***Footer
export const StyledFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const StyledFooterText = styled.span`
  color: ${(props) => (props.Gray ? props.theme.colors.gray : ``)};
`;

export const StyledAppFooter = styled.footer`
  padding: 1rem 0;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 2px solid #eee;
`;
