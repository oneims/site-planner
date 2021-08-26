import React from "react";
import { StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledSitemap } from "@/components/styledComponents/StyledElements";

const MenuGenerator = (items) => {
  items = Array.from(items);
  return items.map((item, index) => {
    return (
      <li key={index} className={item.children ? `has-children` : undefined}>
        <span className={item.name.trim().length < 1 ? `invalid` : undefined}>
          {item.name.trim().length > 0 ? item.name : `...`}
        </span>
        {item.children && item.children.length > 0 ? <ul>{MenuGenerator(item.children)}</ul> : null}
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
          <ul className="tree">
            <li>
              <span>Header Sitemap</span>
              <ul>{MenuGenerator(treeData)}</ul>
            </li>
          </ul>
        </StyledSitemap>
      </StyledContentBox>
    </>
  );
};

export default SitemapCanvas;
