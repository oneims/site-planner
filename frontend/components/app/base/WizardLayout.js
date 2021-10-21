import React, { Component } from "react";
import styled from "styled-components";
// Components
import WizardHeader from "@/components/app/base/WizardHeader";
import WizardFooter from "@/components/app/base/WizardFooter";
import { StyledLoader, StyledLoaderWrapper } from "@/components/styledComponents/StyledElements";

const StyledMain = styled.main`
  padding-top: 78px;
  min-height: 97vh;
`;

export class WizardLayout extends Component {
  render() {
    const { loading } = this.props;
    return (
      <>
        <WizardHeader {...this.props} />
        <StyledMain>{this.props.children}</StyledMain>
        <WizardFooter {...this.props} />
        {loading && (
          <StyledLoaderWrapper Fixed White>
            <StyledLoader />
          </StyledLoaderWrapper>
        )}
      </>
    );
  }
}

export default WizardLayout;
