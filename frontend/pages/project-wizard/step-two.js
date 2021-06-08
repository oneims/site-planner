import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { StyledSection, StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingOne } from "@/components/styledComponents/StyledTypography";
import {
  StyledField,
  StyledFieldWrapper,
  StyledFormWrapper,
  StyledInput,
} from "@/components/styledComponents/StyledElements";

class ProjectWizardStepTwo extends Component {
  componentDidMount = () => {
    this.props.updateHeaderState(
      "step__two",
      "/project-wizard/step-one",
      "/project-wizard/step-two",
      "Next"
    );
    this.props.updateStepTwoButtonState();
  };

  render() {
    const { project_industry, handleChange } = this.props;

    return (
      <>
        <StyledSection>
          <Container>
            <StyledContentBox maxWidth="800" className="text-center mx-auto">
              <StyledHeadingOne>Select an Industry</StyledHeadingOne>
            </StyledContentBox>
            <StyledContentBox className="text-center mx-auto mw-500 mt-4 pt-1">
              <StyledFormWrapper>
                <StyledFieldWrapper>
                  <StyledField>
                    <StyledInput
                      themeStyle="large"
                      name="project_industry"
                      value={project_industry}
                      onChange={handleChange}
                      placeholder="e.g. Saas"
                    />
                  </StyledField>
                </StyledFieldWrapper>
              </StyledFormWrapper>
            </StyledContentBox>
          </Container>
        </StyledSection>
      </>
    );
  }
}

export default ProjectWizardStepTwo;
