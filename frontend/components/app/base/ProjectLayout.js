import React, { Component } from "react";
import styled from "styled-components";
// Components
import ProjectHeader from "@/components/app/base/ProjectHeader";
import ProjectFooter from "@/components/app/base/ProjectFooter";

const StyledMain = styled.main`
  padding-top: 78px;
  min-height: 97vh;
`;

export class ProjectLayout extends Component {
  render() {
    return (
      <>
        <ProjectHeader {...this.props} />
        <StyledMain>{this.props.children}</StyledMain>
        <ProjectFooter {...this.props} />
      </>
    );
  }
}

export default ProjectLayout;
