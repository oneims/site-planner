import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { StyledSection, StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingOne } from "@/components/styledComponents/StyledTypography";
import {
  StyledField,
  StyledFieldWrapper,
  StyledFormWrapper,
  ColorStyles,
} from "@/components/styledComponents/StyledElements";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });

const industries = [
  {
    industry: [
      { value: "software", label: "Software" },
      { value: "retail", label: "Retail" },
      { value: "finance", label: "Finance" },
      { value: "trade", label: "Trade" },
      { value: "transport", label: "Transport" },
      { value: "construction", label: "Construction" },
      { value: "health_care", label: "Health Care" },
    ],
  },
];

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
    const { project_industry, handleSelectChange } = this.props;

    return (
      <>
        <StyledSection className="mh-90vh">
          <Container>
            <StyledContentBox maxWidth="800" className="text-center mx-auto">
              <StyledHeadingOne>Select an Industry</StyledHeadingOne>
            </StyledContentBox>
            <StyledContentBox className="mx-auto mw-500 mt-4 pt-1">
              <StyledFormWrapper>
                <StyledFieldWrapper>
                  <StyledField>
                    <Select
                      className="c-select"
                      name="project_industry"
                      value={project_industry}
                      styles={ColorStyles}
                      onChange={handleSelectChange}
                      options={industries[0].industry}
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
