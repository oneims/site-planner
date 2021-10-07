import React from "react";
import { useRouter } from "next/router";
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

const ShareHeader = () => {
  return (
    <>
      <StyledHeader>
        <Container fluid>
          <StyledHeaderWrapper className="justify-content-center">
            <StyledHeaderColumn className="d-flex">
              <Link href="/">
                <StyledLogoWrapper>
                  <StyledLogo>
                    <StyledLogoSpan>P!</StyledLogoSpan>
                  </StyledLogo>
                </StyledLogoWrapper>
              </Link>
            </StyledHeaderColumn>
          </StyledHeaderWrapper>
        </Container>
      </StyledHeader>
    </>
  );
};

export default ShareHeader;
