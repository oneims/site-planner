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

class EditorAside extends Component {
  state = {
    treeData: [
      {
        name: "Solutions",
        expanded: true,
        children: [{ name: "Solutions Page One" }, { name: "Solutions Page Two" }],
      },
      { name: "About Page" },
      { name: "FAQ Page" },
      { name: "Resources Page" },
      { name: "Blog Page" },
      { name: "Contact Page" },
    ],
    addAsFirstChild: false,
  };

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;
    const getRandomName = () => "Random Item";
    return (
      <>
        <StyledAsideWrapper
          themeStyle={this.props.editorExpanded ? "expanded" : "collapsed"}
          className="theme__overflow-hidden"
        >
          <StyledAside>
            <StyledContentBox>
              <StyledPannel
                themeStyle="topCurved"
                className="theme__solids-bg-white pt-4 pb-4 theme__border-bottom"
              >
                <StyledContentBox className="d-flex align-items-center justify-content-between">
                  <StyledAppHeadingLabel className="mb-0">Editor</StyledAppHeadingLabel>
                  <StyledPrivateButton onClick={this.props.handleEditorExpanded}>
                    {this.props.editorExpandedButtonText}
                  </StyledPrivateButton>
                </StyledContentBox>
              </StyledPannel>
              <StyledPannel className="my-3 mx-2 theme__solids-bg-white pt-4 pb-4 theme__border theme__border-radius-10 theme__height-62vh theme__overflow-y">
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
                      treeData={this.state.treeData}
                      onChange={(treeData) => this.setState({ treeData })}
                      generateNodeProps={({ node, path }) => ({
                        title: (
                          <input
                            style={{ fontSize: "1.1rem" }}
                            value={node.name}
                            onChange={(event) => {
                              const name = event.target.value;

                              this.setState((state) => ({
                                treeData: changeNodeAtPath({
                                  treeData: state.treeData,
                                  path,
                                  getNodeKey,
                                  newNode: { ...node, name },
                                }),
                              }));
                            }}
                          />
                        ),
                        buttons: [
                          <StyledPrivateButton
                            className="ml-2 mr-1"
                            style={{ paddingTop: "0.25rem", paddingBottom: "0.25rem" }}
                            onClick={() =>
                              this.setState((state) => ({
                                treeData: addNodeUnderParent({
                                  treeData: state.treeData,
                                  parentKey: path[path.length - 1],
                                  expandParent: true,
                                  getNodeKey,
                                  newNode: {
                                    name: `Menu Item`,
                                  },
                                  addAsFirstChild: state.addAsFirstChild,
                                }).treeData,
                              }))
                            }
                          >
                            Add Child
                          </StyledPrivateButton>,
                          <StyledPrivateButton
                            className="ml-1"
                            style={{ paddingTop: "0.25rem", paddingBottom: "0.25rem" }}
                            onClick={() =>
                              this.setState((state) => ({
                                treeData: removeNodeAtPath({
                                  treeData: state.treeData,
                                  path,
                                  getNodeKey,
                                }),
                              }))
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
                      onClick={() =>
                        this.setState((state) => ({
                          treeData: state.treeData.concat({
                            name: "Menu Item",
                          }),
                        }))
                      }
                      className="mt-4 mb-5"
                    >
                      Add menu item
                    </StyledPrivateButton>
                  </StyledContentBox>
                </StyledContentBox>
              </StyledPannel>
            </StyledContentBox>
          </StyledAside>
        </StyledAsideWrapper>
      </>
    );
  }
}

export default EditorAside;
