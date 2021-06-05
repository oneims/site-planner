import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderColumn,
  StyledLogoWrapper,
  StyledLogo,
  StyledLogoSpan,
} from "@/components/styledComponents/StyledBase";

import { StyledButton } from "@/components/styledComponents/StyledElements";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <StyledHeaderWrapper>
            <StyledHeaderColumn>
              <Link href="/">
                <StyledLogoWrapper>
                  <StyledLogo>
                    <StyledLogoSpan>P!</StyledLogoSpan>
                  </StyledLogo>
                </StyledLogoWrapper>
              </Link>
            </StyledHeaderColumn>
            <StyledHeaderColumn>
              <Link href="/project-wizard/step-one">
                <StyledButton themeStyle="primary">Get Started</StyledButton>
              </Link>
            </StyledHeaderColumn>
          </StyledHeaderWrapper>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
