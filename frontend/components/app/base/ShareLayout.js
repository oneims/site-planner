import React, { Component } from "react";
import styled from "styled-components";
// Components
import ShareHeader from "@/components/app/base/ShareHeader";
import ShareFooter from "@/components/app/base/ShareFooter";
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
    return (
      <>
        <TemplateStyle />
        <StyledMain>{this.props.children}</StyledMain>
      </>
    );
  }
}

export default ShareLayout;
