import React, { Component } from "react";
import { StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import SortableTree, {
  changeNodeAtPath,
  addNodeUnderParent,
  removeNodeAtPath,
} from "react-sortable-tree-patch-react-17";
import {
  StyledAside,
  StyledPannel,
  StyledAsideWrapper,
} from "@/components/styledComponents/StyledWrappers";
import { StyledAppHeadingLabel } from "@/components/styledComponents/StyledTypography";
import { StyledPrivateButton } from "@/components/styledComponents/StyledElements";

const EditorAside = (props) => {
  const { treeData, handleTree } = props;
  const getNodeKey = ({ treeIndex }) => treeIndex;
  return (
    <>
      <StyledAsideWrapper
        themeStyle={props.editorExpanded ? "expanded" : "collapsed"}
        className="theme__overflow-hidden"
      >
        <StyledAside>
          <StyledContentBox className="d-flex flex-column theme__height-100">
            <StyledPannel
              themeStyle="topCurved"
              displayStyle={props.editorExpanded ? "expanded" : "collapsed"}
              className="theme__viewport-padding theme__solids-bg-white pt-4 pb-4 theme__border-bottom"
            >
              <StyledContentBox className="d-flex align-items-center justify-content-between">
                <StyledAppHeadingLabel className="mb-0">Editor</StyledAppHeadingLabel>
                <StyledPrivateButton onClick={props.handleEditorExpanded}>
                  {props.editorExpandedButtonText}
                </StyledPrivateButton>
              </StyledContentBox>
            </StyledPannel>
            <StyledPannel className="theme__position-relative theme__viewport-padding theme__height-100 my-3 mx-2 theme__solids-bg-white pt-4 pb-4 theme__border theme__border-radius-10 theme__height-62vh theme__overflow-y">
              <StyledContentBox
                style={{ transition: "0.2s ease" }}
                className={props.editorExpanded && `ml-auto mr-auto mw-800 tree-parent`}
              >
                <StyledAppHeadingLabel themeStyle="small" className="mb-0">
                  Build Your Sitemap
                </StyledAppHeadingLabel>
                <StyledContentBox
                  style={{ height: "100%" }}
                  className="d-flex flex-column align-items-start justify-content-between"
                >
                  <StyledContentBox style={{ height: "auto" }}>
                    <SortableTree
                      className="mt-4"
                      isVirtualized={false}
                      treeData={treeData}
                      onChange={(treeData) => handleTree.positionChange(treeData)}
                      generateNodeProps={({ node, path }) => ({
                        title: (
                          <input
                            style={{ fontSize: "1.1rem" }}
                            value={node.name}
                            onChange={(event) =>
                              handleTree.inputChange(
                                event,
                                node,
                                path,
                                getNodeKey,
                                changeNodeAtPath
                              )
                            }
                          />
                        ),
                        buttons: [
                          <StyledPrivateButton
                            className="ml-2 mr-1"
                            style={{ paddingTop: "0.25rem", paddingBottom: "0.25rem" }}
                            onClick={() =>
                              handleTree.addChildItem(
                                path,
                                "Menu Item",
                                getNodeKey,
                                addNodeUnderParent
                              )
                            }
                          >
                            Add Child
                          </StyledPrivateButton>,
                          <StyledPrivateButton
                            className="ml-1"
                            style={{ paddingTop: "0.25rem", paddingBottom: "0.25rem" }}
                            onClick={() =>
                              handleTree.removeItem(path, getNodeKey, removeNodeAtPath)
                            }
                          >
                            Remove
                          </StyledPrivateButton>,
                        ],
                      })}
                    />
                  </StyledContentBox>
                  <StyledContentBox>
                    <StyledPrivateButton
                      onClick={() => handleTree.addItem("Menu Item")}
                      className="mt-4 mb-5"
                    >
                      Add menu item
                    </StyledPrivateButton>
                  </StyledContentBox>
                </StyledContentBox>
              </StyledContentBox>
            </StyledPannel>
          </StyledContentBox>
        </StyledAside>
      </StyledAsideWrapper>
    </>
  );
};

export default EditorAside;
