import React, { useState } from "react";
import { ChromePicker } from "react-color";
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
  let shareURL;
  if (typeof window !== "undefined") {
    shareURL = window.location.href.replace("project", "share");
  }

  const popover = {
    position: "absolute",
    zIndex: "200",
    left: "-115px",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  const {
    editorExpanded,
    shareMode,
    primaryColor,
    displayPrimaryColorPicker,
    borderColor,
    displayBorderColorPicker,
    textColor,
    displayTextColorPicker,
    handleColorPicker,
    title,
  } = props;

  return (
    <>
      {shareMode ? (
        <StyledViewPortWrapper themeStyle="fullWidth">
          <StyledViewPort themeStyle="largerHeight" className="d-flex flex-column">
            <StyledPannel
              themeStyle="topCurved"
              className="theme__viewport-padding theme__solids-bg-white pt-3 pb-3 theme__border-bottom theme__position-sticky theme__top-0 theme__z-index-1"
            >
              <StyledContentBox className="d-flex align-items-end justify-content-between">
                <StyledContentBox>
                  <StyledAppHeadingLabel className="mb-2 d-flex" style={{ lineHeight: "1" }}>
                    Company Name
                  </StyledAppHeadingLabel>
                  <StyledAppContentTypography>Header Sitemap</StyledAppContentTypography>
                </StyledContentBox>
                <StyledContentBox>
                  <StyledAppContentTypography>
                    Powered by{" "}
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      SitePlanner
                    </a>
                  </StyledAppContentTypography>
                </StyledContentBox>
              </StyledContentBox>
            </StyledPannel>
            <StyledContentBox className="pl-4 pr-4 pt-5 theme__height-100 d-flex justify-content-center theme__overflow-y theme__overflow-x theme__canvas-background">
              <SitemapCanvas canvasZoom={canvasZoom} {...props} />
            </StyledContentBox>
          </StyledViewPort>
        </StyledViewPortWrapper>
      ) : (
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
                  <StyledAppContentTypography>{title}</StyledAppContentTypography>
                </StyledContentBox>
                <StyledContentBox>
                  <StyledPrivateButton className="mr-2">Save</StyledPrivateButton>
                  <a href={shareURL} target="_blank" rel="noopener noreferrer">
                    <StyledPrivateButton>Preview</StyledPrivateButton>
                  </a>
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
                <div className="tools d-flex">
                  <div className="theme__position-relative mr-1">
                    <StyledPrivateButton
                      data-target="displayPrimaryColorPicker"
                      data-handler="primaryColor"
                      onClick={handleColorPicker.show}
                    >
                      Primary Color
                    </StyledPrivateButton>
                    {displayPrimaryColorPicker ? (
                      <div style={popover}>
                        <div style={cover} onClick={handleColorPicker.close} />
                        <ChromePicker color={primaryColor} onChange={handleColorPicker.change} />
                      </div>
                    ) : null}
                  </div>
                  <div className="theme__position-relative mr-1">
                    <StyledPrivateButton
                      data-target="displayBorderColorPicker"
                      data-handler="borderColor"
                      onClick={handleColorPicker.show}
                    >
                      Border Color
                    </StyledPrivateButton>
                    {displayBorderColorPicker ? (
                      <div style={popover}>
                        <div style={cover} onClick={handleColorPicker.close} />
                        <ChromePicker color={borderColor} onChange={handleColorPicker.change} />
                      </div>
                    ) : null}
                  </div>
                  <div className="theme__position-relative">
                    <StyledPrivateButton
                      data-target="displayTextColorPicker"
                      data-handler="textColor"
                      className="mr-1"
                      onClick={handleColorPicker.show}
                    >
                      Text Color
                    </StyledPrivateButton>
                    {displayTextColorPicker ? (
                      <div style={popover}>
                        <div style={cover} onClick={handleColorPicker.close} />
                        <ChromePicker color={textColor} onChange={handleColorPicker.change} />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </StyledPannel>
            <StyledContentBox className="pl-4 pr-4 pt-5 theme__height-100 theme__overflow-y theme__overflow-x theme__canvas-background">
              <SitemapCanvas canvasZoom={canvasZoom} {...props} />
            </StyledContentBox>
          </StyledViewPort>
        </StyledViewPortWrapper>
      )}
    </>
  );
};

export default EditorViewport;
