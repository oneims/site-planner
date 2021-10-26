import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container } from "react-bootstrap";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderColumn,
  StyledLogoWrapper,
  StyledLogo,
  StyledLogoSpan,
} from "@/components/styledComponents/StyledBase";

import { StyledButton } from "@/components/styledComponents/StyledElements";

const ProjectHeader = () => {
  const router = useRouter();
  const isEditor = router.query.sitemapParams;
  return (
    <>
      <StyledHeader>
        <Container fluid>
          <StyledHeaderWrapper>
            <StyledHeaderColumn className="d-flex">
              <Link href="/">
                <StyledLogoWrapper>
                  <StyledLogo>
                    <StyledLogoSpan>P!</StyledLogoSpan>
                  </StyledLogo>
                </StyledLogoWrapper>
              </Link>
              {isEditor && (
                <Link href={`/project/${isEditor[0]}`}>
                  <StyledButton
                    className="ml-3"
                    themeStyle="primary"
                    // style={{ fontSize: "0.85rem" }}
                  >
                    Back To Project
                  </StyledButton>
                </Link>
              )}
            </StyledHeaderColumn>
            <StyledHeaderColumn>
              <Link href="#">
                <StyledButton themeStyle="primary">Email Me This Project</StyledButton>
              </Link>
            </StyledHeaderColumn>
          </StyledHeaderWrapper>
        </Container>
      </StyledHeader>
    </>
  );
};

export default ProjectHeader;
