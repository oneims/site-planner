import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderColumn,
} from "@/components/styledComponents/StyledBase";

import { StyledButton, StyledLinkButton } from "@/components/styledComponents/StyledElements";

const WizardHeader = () => {
  return (
    <>
      <StyledHeader className="step step__one">
        <Container>
          <StyledHeaderWrapper>
            <StyledHeaderColumn>
              <Link href="/">
                <StyledLinkButton>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M19 11H7.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L7.414 13H19a1 1 0 1 0 0-2"
                    ></path>
                  </svg>
                  Back
                </StyledLinkButton>
              </Link>
            </StyledHeaderColumn>
            <StyledHeaderColumn>
              <Link href="/get-started">
                <StyledButton themeStyle="primary">Next</StyledButton>
              </Link>
            </StyledHeaderColumn>
          </StyledHeaderWrapper>
        </Container>
      </StyledHeader>
    </>
  );
};

export default WizardHeader;
