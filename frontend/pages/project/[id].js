import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { StyledSection, StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingOne } from "@/components/styledComponents/StyledTypography";

class ProjectOverview extends Component {
  render() {
    return (
      <>
        <StyledSection className="mh-90vh">
          <Container>
            <StyledContentBox maxWidth="800" className="text-center mx-auto">
              <StyledHeadingOne>Project ID</StyledHeadingOne>
            </StyledContentBox>
          </Container>
        </StyledSection>
      </>
    );
  }
}

export default ProjectOverview;
