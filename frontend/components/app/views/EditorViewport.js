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
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
        <StyledContentBox className="theme__height-100 theme__overflow-hidden theme__canvas-background">
          <TransformWrapper
            centerOnInit={true}
            centerZoomedOut={false}
            minScale={0.3}
            maxScale={1.1}
            initialScale={0.75}
            initialPositionX={15}
            initialPositionY={100}
            // panning={{
            //   disabled: true,
            // }}
            pinch={{
              step: 0.1,
            }}
            wheel={{
              wheelDisabled: true,
              step: 0.1,
            }}
            doubleClick={{
              step: 0.2,
            }}
            alignmentAnimation={{
              disabled: true,
            }}
            zoomAnimation={{
              animationType: "linear",
              animationTime: 200,
            }}
            velocityAnimation={{
              animationType: "linear",
              animationTime: 200,
            }}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <StyledPannel className="theme__viewport-padding theme__solids-bg-white pt-2 pb-2 theme__border-bottom theme__position-sticky theme__top-0 theme__z-index-1">
                  <div className="tools">
                    <StyledPrivateButton
                      className="mr-1"
                      onClick={() => zoomIn(0.2, 100, "linear")}
                    >
                      +
                    </StyledPrivateButton>
                    <StyledPrivateButton
                      className="mr-1"
                      onClick={() => zoomOut(0.2, 100, "linear")}
                    >
                      -
                    </StyledPrivateButton>
                    <StyledPrivateButton onClick={() => resetTransform()}>
                      Reset
                    </StyledPrivateButton>
                  </div>
                </StyledPannel>
                <StyledContentBox className="theme__overflow-x theme__height-100">
                  <TransformComponent
                    wrapperClass="theme__transform-wrapper"
                    contentClass="theme__transform-component"
                  >
                    <SitemapCanvas />
                  </TransformComponent>
                </StyledContentBox>
              </>
            )}
          </TransformWrapper>
        </StyledContentBox>
      </StyledViewPort>
    </StyledViewPortWrapper>
  );
};

export default EditorViewport;
