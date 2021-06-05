import React, { useEffect, useContext, useState } from "react";
import WizardLayout from "@/components/app/base/WizardLayout";
import { Container } from "react-bootstrap";
import { StyledSection, StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingOne } from "@/components/styledComponents/StyledTypography";

const ProjectWizardStepTwo = (props) => {
  useEffect(() => {
    console.log(props);
  });
  return (
    <>
      <StyledSection>
        <Container>
          <StyledContentBox maxWidth="800" className="text-center mx-auto">
            <StyledHeadingOne>Select an Industry</StyledHeadingOne>
          </StyledContentBox>
        </Container>
      </StyledSection>
    </>
  );
};

export default ProjectWizardStepTwo;
