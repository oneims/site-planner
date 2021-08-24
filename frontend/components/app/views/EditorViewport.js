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
import SitemapCanvas from "@/components/app/views/SitemapCanvas";

const EditorViewport = ({ editorExpanded }) => {
  return (
    <StyledViewPortWrapper themeStyle={editorExpanded ? "collapsed" : "normal"}>
      <StyledViewPort className="d-flex flex-column">
        <StyledPannel
          themeStyle="topCurved"
          className="theme__viewport-padding theme__solids-bg-white pt-3 pb-3 theme__border-bottom theme__position-sticky theme__top-0 theme__z-index-1"
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
        <StyledContentBox className="pt-5 theme__viewport-padding theme__height-100 theme__overflow-y theme__canvas-background ">
          <SitemapCanvas />
        </StyledContentBox>
      </StyledViewPort>
    </StyledViewPortWrapper>
  );
};

export default EditorViewport;
