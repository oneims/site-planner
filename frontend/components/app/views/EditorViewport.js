import React from "react";
import {
  StyledContentBox,
  StyledPannel,
  StyledViewPort,
  StyledViewPortWrapper,
} from "@/components/styledComponents/StyledWrappers";
import {
  StyledAppHeadingLabel,
  StyledAppContent,
} from "@/components/styledComponents/StyledTypography";
import { StyledPrivateButton } from "@/components/styledComponents/StyledElements";

const EditorViewport = ({ editorExpanded }) => {
  return (
    <StyledViewPortWrapper themeStyle={editorExpanded ? "collapsed" : "normal"}>
      <StyledViewPort>
        <StyledPannel
          themeStyle="topCurved"
          className="theme__solids-bg-white pt-3 pb-3 theme__border-bottom"
        >
          <StyledContentBox className="d-flex align-items-center justify-content-between">
            <StyledContentBox>
              <StyledAppHeadingLabel className="mb-2 d-flex" style={{ lineHeight: "1" }}>
                Company Name
              </StyledAppHeadingLabel>
              <StyledAppContent>Header Sitemap</StyledAppContent>
            </StyledContentBox>
            <StyledContentBox>
              <StyledPrivateButton>Preview</StyledPrivateButton>
            </StyledContentBox>
          </StyledContentBox>
        </StyledPannel>
      </StyledViewPort>
    </StyledViewPortWrapper>
  );
};

export default EditorViewport;
