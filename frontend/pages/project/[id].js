import React, { Component } from "react";
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

class ProjectOverview extends Component {
  render() {
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
                      <h2>Project Name</h2>
                    </StyledContentBox>
                  </StyledAppBlock>
                </StyledViewPort>
              </StyledViewPortWrapper>
            </StyledAppContent>
          </Container>
        </StyledAppWrapper>
      </>
    );
  }
}

export default ProjectOverview;
