import React, { Component } from "react";
import styled from "styled-components";
// Components
import ProjectHeader from "@/components/app/base/ProjectHeader";
import ProjectFooter from "@/components/app/base/ProjectFooter";
import { createGlobalStyle } from "styled-components";

const TemplateStyle = createGlobalStyle`
  body,html {
    overflow: hidden;
  }
`;

const StyledMain = styled.main`
  padding-top: 78px;
  height: 100vh;
  overflow: hidden;
`;

export class ProjectLayout extends Component {
  render() {
    return (
      <>
        <TemplateStyle />
        <ProjectHeader {...this.props} />
        <StyledMain>{this.props.children}</StyledMain>
        <ProjectFooter {...this.props} />
      </>
    );
  }
}

export default ProjectLayout;
