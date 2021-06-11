import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { StyledButton } from "@/components/styledComponents/StyledElements";
import { StyledSection, StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingOne, StyledSubtitle } from "@/components/styledComponents/StyledTypography";

const SectionHero001 = () => {
  return (
    <StyledSection>
      <Container>
        <StyledContentBox maxWidth="800" className="mx-auto text-center">
          <StyledHeadingOne>Siteplanner's Homepage</StyledHeadingOne>
          <StyledSubtitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s.
          </StyledSubtitle>
          <StyledContentBox className="d-sm-flex justify-content-center mt-4">
            <Link href="/project-wizard/step-one">
              <StyledButton size="large" themeStyle="primary">
                Create a New Project!
              </StyledButton>
            </Link>
          </StyledContentBox>
        </StyledContentBox>
      </Container>
    </StyledSection>
  );
};

export default SectionHero001;
