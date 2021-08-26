import React, { Component } from "react";
import ProjectLayout from "/components/app/base/ProjectLayout";

class ProjectProvider extends Component {
  state = {
    treeData: [
      {
        name: "Solutions Page",
        expanded: true,
        children: [{ name: "Solutions Page One" }, { name: "Solutions Page Two" }],
      },
      {
        name: "About Page",
        expanded: true,
        children: [{ name: "Our History" }, { name: "Meet The Team" }],
      },
      { name: "FAQ Page" },
      { name: "Resources Page" },
      { name: "Blog Page" },
      { name: "Contact Page" },
    ],
    addAsFirstChild: false,
  };

  handleTree = {
    positionChange: (treeData) => {
      this.setState({
        treeData,
      });
      console.log(this.state.treeData);
    },
    inputChange: (event, node, path, getNodeKey, changeNodeAtPath) => {
      const name = event.target.value;
      this.setState((state) => ({
        treeData: changeNodeAtPath({
          treeData: state.treeData,
          path,
          getNodeKey,
          newNode: { ...node, name },
        }),
      }));
    },
    addChildItem: (path, itemName, getNodeKey, addNodeUnderParent) => {
      this.setState((state) => ({
        treeData: addNodeUnderParent({
          treeData: state.treeData,
          parentKey: path[path.length - 1],
          expandParent: true,
          getNodeKey,
          newNode: {
            name: itemName,
          },
          addAsFirstChild: state.addAsFirstChild,
        }).treeData,
      }));
    },
    addItem: (itemName) => {
      this.setState((state) => ({
        treeData: state.treeData.concat({
          name: itemName,
        }),
      }));
    },
    removeItem: (path, getNodeKey, removeNodeAtPath) => {
      this.setState((state) => ({
        treeData: removeNodeAtPath({
          treeData: state.treeData,
          path,
          getNodeKey,
        }),
      }));
    },
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ProjectLayout>
        <Component handleTree={this.handleTree} {...this.state} {...pageProps} />
      </ProjectLayout>
    );
  }
}

export default ProjectProvider;
