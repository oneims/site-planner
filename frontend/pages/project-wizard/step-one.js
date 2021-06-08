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

class ProjectWizardStepOne extends Component {
  componentDidMount = () => {
    this.props.updateHeaderState("step__one", "/", "/project-wizard/step-two", "Next");
    this.props.updateStepOneButtonState();
  };

  render() {
    const { project_name, handleChange } = this.props;

    return (
      <>
        <StyledSection>
          <Container>
            <StyledContentBox maxWidth="800" className="text-center mx-auto">
              <StyledHeadingOne>Name Your Project</StyledHeadingOne>
            </StyledContentBox>
            <StyledContentBox className="text-center mx-auto mw-500 mt-4 pt-1">
              <StyledFormWrapper>
                <StyledFieldWrapper>
                  <StyledField>
                    <StyledInput
                      themeStyle="large"
                      name="project_name"
                      value={project_name}
                      onChange={handleChange}
                      placeholder="My Awesome Project"
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

export default ProjectWizardStepOne;
