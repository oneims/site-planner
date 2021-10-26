import React, { Component } from "react";
import styled from "styled-components";
// Components
import { StyledLoader, StyledLoaderWrapper } from "@/components/styledComponents/StyledElements";
import { createGlobalStyle } from "styled-components";

const TemplateStyle = createGlobalStyle`
  body,html {
    overflow: hidden;
  }
`;

const StyledMain = styled.main`
  // padding-top: 78px;
  height: 100vh;
  overflow: hidden;
`;

class ShareLayout extends Component {
  render() {
    const { loading } = this.props;
    return (
      <>
        <TemplateStyle />
        {!loading && <StyledMain>{this.props.children}</StyledMain>}
        {loading && (
          <StyledLoaderWrapper Fixed WhiteLess>
            <StyledLoader />
          </StyledLoaderWrapper>
        )}
      </>
    );
  }
}

export default ShareLayout;
