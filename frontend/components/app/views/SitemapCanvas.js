import React from "react";
import { StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledSitemap } from "@/components/styledComponents/StyledElements";

const MenuGenerator = (items) => {
  items = Array.from(items);
  return items.map((item, index) => {
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
          <div className={`page ${item.children && item.children.length > 0 ? "" : "nochilds"}`}>
            {item.name.trim().length > 0 ? item.name : `...`}
          </div>
          <div className="page-drop-target tafter">
            <div className="drop-box"></div>
          </div>
        </div>
        {item.children && item.children.length > 0 ? (
          <ul className="tree-children">{MenuGenerator(item.children)}</ul>
        ) : null}
      </li>
    );
  });
};

const SitemapCanvas = ({ treeData, canvasZoom }) => {
  return (
    <>
      <StyledContentBox className="theme__min-height-2000 theme__min-width-2000">
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
                  <div className="page page-root">Header Sitemap</div>
                </div>
                <ul className="tree-children">{MenuGenerator(treeData)}</ul>
              </li>
            </ul>
          </div>
        </StyledSitemap>
      </StyledContentBox>
    </>
  );
};

export default SitemapCanvas;
