import React, { Component } from "react";
import styled from "styled-components";
// Components
import ProjectHeader from "@/components/app/base/ProjectHeader";
import ProjectFooter from "@/components/app/base/ProjectFooter";
import { StyledLoader, StyledLoaderWrapper } from "@/components/styledComponents/StyledElements";
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

class ProjectLayout extends Component {
  render() {
    const { loading } = this.props;
    return (
      <>
        <TemplateStyle />
        <ProjectHeader {...this.props} />
        {!loading && <StyledMain>{this.props.children}</StyledMain>}
        <ProjectFooter {...this.props} />
        {loading && (
          <StyledLoaderWrapper Fixed WhiteLess>
            <StyledLoader />
          </StyledLoaderWrapper>
        )}
      </>
    );
  }
}

export default ProjectLayout;
