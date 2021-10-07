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
    primaryColor: {
      r: "234",
      g: "240",
      b: "246",
      a: "1",
    },
    borderColor: {
      r: "203",
      g: "214",
      b: "226",
      a: "1",
    },
    textColor: {
      r: "80",
      g: "110",
      b: "145",
      a: "1",
    },
    displayPrimaryColorPicker: false,
    displayBorderColorPicker: false,
    displayTextColorPicker: false,
    activeColorPicker: null,
  };

  handleTree = {
    positionChange: (treeData) => {
      this.setState({
        treeData,
      });
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

  handleColorPicker = {
    show: (event) => {
      const target = event.target.getAttribute("data-target");
      const handler = event.target.getAttribute("data-handler");
      console.log(target);
      this.setState({ [target]: !this.state[target], activeColorPicker: handler });
    },
    close: (event) => {
      const target = event.target.getAttribute("data-target");
      this.setState({
        displayPrimaryColorPicker: false,
        displayBorderColorPicker: false,
        displayTextColorPicker: false,
        activeColorPicker: null,
      });
    },
    change: (color) => {
      const active = this.state.activeColorPicker;
      this.setState({ [active]: color.rgb });
    },
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ProjectLayout>
        <Component
          handleTree={this.handleTree}
          handleColorPicker={this.handleColorPicker}
          {...this.state}
          {...pageProps}
        />
      </ProjectLayout>
    );
  }
}

export default ProjectProvider;
