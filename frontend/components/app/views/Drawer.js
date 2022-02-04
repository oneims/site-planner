import React from "react";
import { TwitterPicker } from "react-color";
import {
  StyledDrawer,
  StyledDrawerBody,
  StyledDrawerCloseButton,
  StyledDrawerCloseButtonWrapper,
  StyledDrawerFooter,
  StyledDrawerFooterContent,
  StyledDrawerHeader,
  StyledDrawerWrapper,
} from "@/components/styledComponents/StyledElements";
import { StyledPrivateButton } from "@/components/styledComponents/StyledElements";
import {
  StyledAppHeadingLabel,
  StyledAppContentTypography,
} from "@/components/styledComponents/StyledTypography";

const Drawer = (props) => {
  return (
    <StyledDrawer Left className={props.drawerOpen ? `active` : ``}>
      <StyledDrawerWrapper>
        <StyledDrawerHeader>
          <div>
            {props.selectedNode && (
              <>
                <StyledAppHeadingLabel className="text-white mb-0 theme__truncate">
                  {props.selectedNode.name ? props.selectedNode.name : `...`}
                </StyledAppHeadingLabel>
                <span className="text-white d-block" style={{ fontSize: "12px" }}>
                  Override Primary Settings
                </span>
              </>
            )}
          </div>
          <StyledDrawerCloseButtonWrapper>
            <StyledDrawerCloseButton
              onClick={() => {
                props.handleDrawer.close();
              }}
            >
              <figure>
                <svg className="x-29px_svg__svgIcon-use" width="29" height="29">
                  <path
                    d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </figure>
            </StyledDrawerCloseButton>
          </StyledDrawerCloseButtonWrapper>
        </StyledDrawerHeader>
        <StyledDrawerBody>
          {props.selectedNode && (
            <>
              <div className="mb-4 pb-2">
                <div className="d-flex align-items-center">
                  <StyledAppHeadingLabel className="h6 pr-2 mb-0">
                    Background Color
                  </StyledAppHeadingLabel>
                  {props.selectedNode.backgroundColor && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "18px", height: "18px" }}
                      viewBox="0 0 20 20"
                      fill="#1cb57c"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <TwitterPicker
                  color={
                    props.selectedNode.backgroundColor
                      ? props.selectedNode.backgroundColor
                      : props.primaryColor
                  }
                  onChange={props.handleTree.updateNodeBackgroundColor}
                />
              </div>
              <div className="mb-4 pb-2">
                <div className="d-flex align-items-center">
                  <StyledAppHeadingLabel className="h6 pr-2 mb-0">
                    Border Color
                  </StyledAppHeadingLabel>
                  {props.selectedNode.borderColor && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "18px", height: "18px" }}
                      viewBox="0 0 20 20"
                      fill="#1cb57c"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <TwitterPicker
                  color={
                    props.selectedNode.borderColor
                      ? props.selectedNode.borderColor
                      : props.borderColor
                  }
                  onChange={props.handleTree.updateNodeBorderColor}
                />
              </div>
              <div className="mb-4 pb-2">
                <div className="d-flex align-items-center">
                  <StyledAppHeadingLabel className="h6 pr-2 mb-0">Text Color</StyledAppHeadingLabel>
                  {props.selectedNode.textColor && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "18px", height: "18px" }}
                      viewBox="0 0 20 20"
                      fill="#1cb57c"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <TwitterPicker
                  color={
                    props.selectedNode.textColor ? props.selectedNode.textColor : props.textColor
                  }
                  onChange={props.handleTree.updateNodeTextColor}
                />
              </div>
            </>
          )}
        </StyledDrawerBody>
        <StyledDrawerFooter>
          <StyledDrawerFooterContent className="text-right">
            <StyledPrivateButton
              onClick={() => {
                props.handleDrawer.close();
                props.handleSave();
              }}
            >
              Save
            </StyledPrivateButton>
          </StyledDrawerFooterContent>
        </StyledDrawerFooter>
      </StyledDrawerWrapper>
    </StyledDrawer>
  );
};

export default Drawer;
