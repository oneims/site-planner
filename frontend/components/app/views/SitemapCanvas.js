import React from "react";
import { StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledSitemap } from "@/components/styledComponents/StyledElements";

const MenuGenerator = (items, buttonStyles, handleTree) => {
  items = Array.from(items);
  return items.map((item, index) => {
    const nodeStyles = {
      backgroundColor: item.backgroundColor
        ? `rgba(${item.backgroundColor.r}, ${item.backgroundColor.g}, ${item.backgroundColor.b}, ${item.backgroundColor.a})`
        : buttonStyles.backgroundColor,
      borderColor: item.borderColor
        ? `rgba(${item.borderColor.r}, ${item.borderColor.g}, ${item.borderColor.b}, ${item.borderColor.a})`
        : buttonStyles.borderColor,
      color: item.textColor
        ? `rgba(${item.textColor.r}, ${item.textColor.g}, ${item.textColor.b}, ${item.textColor.a})`
        : buttonStyles.color,
      cursor: item.nodeId && handleTree ? `pointer` : ``,
    };
    return (
      <li
        key={index}
        className={`tree-leaf ${index === 0 && items.length > 1 ? "first" : "child"} ${
          index === items.length - 1 && items.length > 1 ? "last" : ""
        } ${items.length === 1 ? "single" : ""}`}
      >
        <div className={`tree-node`}>
          <div className="page-drop-target tbefore">
            <div className="drop-box"></div>
          </div>
          <div
            onClick={() => {
              if (handleTree) {
                handleTree.updateNodeSettings(item);
              }
            }}
            style={nodeStyles}
            className={`page ${item.nodeId && handleTree ? `theme__node-hover` : ``} ${
              item.children && item.children.length > 0 ? "" : "nochilds"
            }`}
          >
            {item.name.trim().length > 0 ? item.name : `...`}
          </div>
          <div className="page-drop-target tafter">
            <div className="drop-box"></div>
          </div>
        </div>
        {item.children && item.children.length > 0 ? (
          <ul className="tree-children">
            {MenuGenerator(item.children, buttonStyles, handleTree)}
          </ul>
        ) : null}
      </li>
    );
  });
};

const SitemapCanvas = ({
  shareMode,
  handleTree,
  treeData,
  canvasZoom,
  primaryColor,
  borderColor,
  textColor,
  title,
}) => {
  const buttonStyles = {
    backgroundColor: `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${primaryColor.a})`,
    borderColor: `rgba(${borderColor.r}, ${borderColor.g}, ${borderColor.b}, ${borderColor.a})`,
    color: `rgba(${textColor.r}, ${textColor.g}, ${textColor.b}, ${textColor.a})`,
  };

  return (
    <>
      {treeData && (
        <StyledContentBox
          className={
            !shareMode ? `theme__min-height-2000 theme__min-width-2000` : `ml-auto mr-auto`
          }
        >
          <StyledSitemap
            style={{
              transform: `translateX(${canvasZoom.translateX}px) translateY(${canvasZoom.translateY}px) scale(${canvasZoom.scale})`,
              transition: `0.2s ease`,
            }}
          >
            <div className="tree-con mix-view">
              <ul className="tree-children root">
                <li className="tree-leaf root">
                  <div className="tree-node">
                    <div style={buttonStyles} className="page page-root">
                      {title && title}
                    </div>
                  </div>
                  <ul className="tree-children">
                    {MenuGenerator(treeData, buttonStyles, handleTree)}
                  </ul>
                </li>
              </ul>
            </div>
          </StyledSitemap>
        </StyledContentBox>
      )}
    </>
  );
};

export default SitemapCanvas;
