import React, { Component } from "react";
import styled from "styled-components";
// Components
import WizardHeader from "@/components/app/base/WizardHeader";
import WizardFooter from "@/components/app/base/WizardFooter";

const StyledMain = styled.main`
  padding-top: 78px;
  min-height: 97vh;
`;

export class WizardLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <WizardHeader />
        <StyledMain>{children}</StyledMain>
        <WizardFooter />
      </>
    );
  }
}

export default WizardLayout;
