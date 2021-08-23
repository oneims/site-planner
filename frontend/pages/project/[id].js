import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import {
  StyledAppBlock,
  StyledContentBox,
  StyledAppWrapper,
  StyledAppContent,
  StyledAside,
  StyledAsideWrapper,
  StyledViewPort,
  StyledViewPortWrapper,
} from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingOne } from "@/components/styledComponents/StyledTypography";

const ProjectOverview = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }
  const projectID = id;

  return (
    <>
      <StyledAppWrapper>
        <Container fluid>
          <StyledAppContent>
            <StyledAsideWrapper>
              <StyledAside></StyledAside>
            </StyledAsideWrapper>
            <StyledViewPortWrapper>
              <StyledViewPort>
                <StyledAppBlock className="my-0">
                  <StyledContentBox>
                    <h2>Project Overview</h2>
                  </StyledContentBox>
                </StyledAppBlock>
              </StyledViewPort>
            </StyledViewPortWrapper>
          </StyledAppContent>
        </Container>
      </StyledAppWrapper>
    </>
  );
};

export default ProjectOverview;
