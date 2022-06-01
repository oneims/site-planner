import React from "react";
import { Container } from "react-bootstrap";
import {
  StyledFooter,
  StyledFooterWrapper,
  StyledFooterText,
} from "@/components/styledComponents/StyledBase";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container>
          <StyledFooterWrapper>
            <StyledFooterText Gray>© Copyright SitePlanner 2022</StyledFooterText>
          </StyledFooterWrapper>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
