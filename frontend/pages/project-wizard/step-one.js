import React, { Component } from "react";
import WizardLayout from "@/components/app/base/WizardLayout";
import { Container } from "react-bootstrap";
import { StyledSection, StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingOne } from "@/components/styledComponents/StyledTypography";

class ProjectWizardStepOne extends Component {
  componentDidMount = () => {
    this.props.updateHeaderState("one");
  };

  render() {
    const { currentStep } = this.props;

    return (
      <>
        <WizardLayout currentStep={currentStep}>
          <StyledSection>
            <Container>
              <StyledContentBox maxWidth="800" className="text-center mx-auto">
                <StyledHeadingOne>Name Your Project</StyledHeadingOne>
              </StyledContentBox>
            </Container>
          </StyledSection>
        </WizardLayout>
      </>
    );
  }
}

export default ProjectWizardStepOne;
