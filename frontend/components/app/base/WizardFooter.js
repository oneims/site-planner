import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { StyledAppFooter } from "@/components/styledComponents/StyledBase";
import { StyledButton } from "@/components/styledComponents/StyledElements";

const WizardFooter = (props) => {
  const { nextDestination, nextButtonText, nextButtonState, currentStep, handleSubmit } = props;
  return (
    <>
      <StyledAppFooter>
        <Container className="text-center">
          {currentStep === "step__three" ? (
            <StyledButton
              onClick={handleSubmit}
              state={nextButtonState}
              className={nextButtonState}
            >
              {nextButtonText}
            </StyledButton>
          ) : (
            <Link href={nextDestination}>
              <StyledButton state={nextButtonState} themeStyle="primary">
                {nextButtonText}
              </StyledButton>
            </Link>
          )}
        </Container>
      </StyledAppFooter>
    </>
  );
};

export default WizardFooter;
