import React from "react";
import { Container } from "react-bootstrap";
import {
  StyledFooter,
  StyledFooterWrapper,
  StyledFooterText,
} from "@/components/styledComponents/StyledBase";

const WizardFooter = () => {
  return (
    <>
      <StyledFooter>
        <Container>
          <StyledFooterWrapper>
            <StyledFooterText Gray>© Copyright SitePlanner 2021</StyledFooterText>
          </StyledFooterWrapper>
        </Container>
      </StyledFooter>
    </>
  );
};

export default WizardFooter;
