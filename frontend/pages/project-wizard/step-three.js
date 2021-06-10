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
      { value: "1-5", label: "1-5" },
      { value: "5-10", label: "5-10" },
      { value: "10-15", label: "10-15" },
      { value: "15-20", label: "15-20" },
      { value: "20+", label: "20+" },
    ],
  },
];

class ProjectWizardStepTwo extends Component {
  componentDidMount = () => {
    this.props.updateHeaderState(
      "step__three",
      "/project-wizard/step-two",
      "#",
      "Create My Project"
    );
    this.props.updateStepThreeButtonState();
  };

  render() {
    const { number_of_pages, handleSelectChange } = this.props;

    return (
      <>
        <StyledSection className="mh-90vh">
          <Container>
            <StyledContentBox maxWidth="800" className="text-center mx-auto">
              <StyledHeadingOne>Number of Pages</StyledHeadingOne>
            </StyledContentBox>
            <StyledContentBox className="mx-auto mw-500 mt-4 pt-1">
              <StyledFormWrapper>
                <StyledFieldWrapper>
                  <StyledField>
                    <Select
                      className="c-select"
                      name="number_of_pages"
                      value={number_of_pages}
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
