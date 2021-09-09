import React, { useState } from "react";
import {
  StyledContentBox,
  StyledPannel,
  StyledViewPort,
  StyledViewPortWrapper,
} from "@/components/styledComponents/StyledWrappers";
import {
  StyledAppHeadingLabel,
  StyledAppContentTypography,
} from "@/components/styledComponents/StyledTypography";
import { StyledPrivateButton } from "@/components/styledComponents/StyledElements";
import SitemapCanvas from "@/components/app/views/SitemapCanvas";

const EditorViewport = (props) => {
  const [canvasZoom, setCanvasZoom] = useState({
    scale: 1,
    translateX: 0,
    translateY: 0,
  });

  const zoomIn = () => {
    if (canvasZoom.scale < 5) {
      setCanvasZoom((prevState) => ({
        scale: prevState.scale + 0.1,
        translateX: prevState.translateX + 100,
        translateY: prevState.translateY + 10,
      }));
    }
  };

  const zoomOut = () => {
    if (canvasZoom.scale > 0.4) {
      setCanvasZoom((prevState) => ({
        scale: prevState.scale - 0.1,
        translateX: prevState.translateX - 100,
        translateY: prevState.translateY - 0,
      }));
    }
  };

  const resetZoom = () => {
    setCanvasZoom({
      scale: 1,
      translateX: 0,
      translateY: 0,
    });
  };

  const { editorExpanded } = props;

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
              <StyledAppContentTypography>Header Sitemap</StyledAppContentTypography>
            </StyledContentBox>
            <StyledContentBox>
              <StyledPrivateButton className="mr-2">Save</StyledPrivateButton>
              <StyledPrivateButton>Preview</StyledPrivateButton>
            </StyledContentBox>
          </StyledContentBox>
        </StyledPannel>
        <StyledPannel className="theme__viewport-padding theme__solids-bg-white pt-2 pb-2 theme__border-bottom theme__position-sticky theme__top-0 theme__z-index-1">
          <div className="d-flex align-items-center justify-content-between">
            <div className="tools">
              <StyledPrivateButton className="mr-1" onClick={() => zoomIn()}>
                +
              </StyledPrivateButton>
              <StyledPrivateButton className="mr-1" onClick={() => zoomOut()}>
                -
              </StyledPrivateButton>
              <StyledPrivateButton onClick={() => resetZoom()}>Reset</StyledPrivateButton>
            </div>
            <div className="tools">
              <StyledPrivateButton className="mr-1">Primary Color</StyledPrivateButton>
              <StyledPrivateButton className="mr-1">Secondary Color</StyledPrivateButton>
              <StyledPrivateButton>Map View</StyledPrivateButton>
            </div>
          </div>
        </StyledPannel>
        <StyledContentBox className="pl-4 pr-4 pt-5 theme__height-100 theme__overflow-y theme__overflow-x theme__canvas-background">
          <SitemapCanvas canvasZoom={canvasZoom} {...props} />
        </StyledContentBox>
      </StyledViewPort>
    </StyledViewPortWrapper>
  );
};

export default EditorViewport;
