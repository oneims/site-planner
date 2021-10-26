import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { theme } from "../../styles/ThemeConfig.js";

// ***Elements
export const StyledButton = styled.button`
  padding: 0.6rem 1.25rem;
  width: auto;
  cursor: pointer;
  color: #fff;
  border: none;
  outline: none;
  border-radius: ${theme.defaultBorderRadius};
  font-weight: 600;
  background-color: ${(props) =>
    props.themeStyle === "secondary" ? props.theme.colors.secondary : props.theme.colors.primary};
  transition: 0.2s ease;
  &:hover {
    background-color: ${(props) =>
      props.themeStyle === "secondary"
        ? darken(props.theme.hoverIntensity, props.theme.colors.secondary)
        : darken(props.theme.hoverIntensity, props.theme.colors.primary)};
  }
  ${(props) =>
    props.size === "large"
      ? `
        font-size: 1rem;
        @media (min-width: 768px) {
            font-size: 1.35rem;
          }
      `
      : ``};
  ${(props) =>
    props.state === "disabled"
      ? `
        transition: 0.2s ease;
        background-color: #888;
        pointer-events: none;
        color: #fff;
      `
      : ``};
`;

export const StyledPrivateButton = styled.button`
  background-color: ${theme.colors.appButtonBackground};
  border-color: ${theme.colors.appButtonBorder};
  color: ${theme.colors.appButtonText};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: 400;
  text-align: center;
  user-select: none;
  font-size: 0.85rem;
  transition: all 0.15s ease-out;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0.45rem 1rem;
  &:active {
    transform: scale(1.04);
    background-color: ${lighten(0.1, theme.colors.appButtonBackground)};
  }
  &:hover {
    transition: all 0.15s ease-out;
    background-color: ${darken(0.05, theme.colors.appButtonBackground)};
  }
  ${(props) =>
    props.themeState === "disabled"
      ? `
        transition: 0.2s ease;
        background-color: #888;
        pointer-events: none;
        color: #fff;
      `
      : ``};
`;

export const StyledLinkButton = styled.button`
  width: auto;
  cursor: pointer;
  color: inherit;
  background: none;
  font-weight: 600;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  transition: 0.2s ease;
  font-size: inherit;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.2s ease;
  }
  svg {
    margin-right: 0.25rem;
  }
`;

// App Elements

// Form

export const StyledFormWrapper = styled.div``;

export const StyledFieldWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const StyledField = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    width: ${(props) => (props.themeStyle === "two-column" ? "49%" : "100%")};
    margin-bottom: 0;
  }
`;

export const StyledInput = styled.input`
  padding: 9px 10px;
  border-radius: 3px;
  border: 1px solid #cbd6e2;
  transition: all 0.15s ease-out;
  background-color: #f5f8fa;
  color: #000;
  display: block;
  line-height: 22px;
  text-align: left;
  vertical-align: middle;
  width: 100%;
  font-weight: 700;
  font-size: ${(props) => (props.themeStyle === "large" ? "1.15rem;" : "1rem")};
  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 4px 1px rgb(129 140 248 / 30%),
      0 0 0 1px ${(props) => props.theme.colors.primary};
    outline: 0;
  }
  ${(props) =>
    props.themeStyle === "inline"
      ? css`
          font-weight: 500;
          padding: 5px 10px;
          font-size: 14px;
        `
      : ``};
`;

// Theme Card
export const StyledSitemapCard = styled.div`
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.borderColor};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  .show-on-hover {
    opacity: 0;
    visibility: hidden;
    transition: 0.2s ease;
    pointer-events: all;
  }
  &:hover {
    .show-on-hover {
      opacity: 1;
      transition: 0.2s ease;
      visibility: visible;
      pointer-events: all;
    }
  }
`;

export const StyledSitemapCardContent = styled.div``;

export const StyledSitemapTop = styled.div`
  height: 70px;
  background-color: ${theme.colors.primary};
`;

// React Select
export const ColorStyles = {
  control: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: "#f5f8fa",
      minHeight: "40px",
      fontWeight: "700",
      fontSize: "1.15rem",
      borderColor: isFocused ? theme.colors.primary : `hsl(0, 0%, 80%)`,
      boxShadow: isFocused ? `0 0 0 1px ${theme.colors.primary}` : null,
    };
  },
  menu: (styles) => ({
    ...styles,
    fontWeight: "700",
    backgroundColor: "#f5f8fa",
  }),
  input: (styles) => ({
    ...styles,
    fontWeight: "700",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? theme.colors.primary
        : isFocused
        ? `#eee`
        : null,
      color: isDisabled ? "#ccc" : isSelected ? (10 > 2 ? "white" : "black") : `#000`,
      cursor: isDisabled ? "not-allowed" : "default",
      borderColor: isFocused ? theme.colors.primary : null,
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? theme.colors.primary : "#eee"),
      },
    };
  },
};

// Loader
export const StyledLoader = styled.div`
  animation: rotation 0.6s infinite linear;
  border: 2px solid ${theme.colors.primary};
  border-radius: 50%;
  border-top-color: #fff;
  height: 3em;
  width: 3em;
  display: block;
`;

export const StyledLoaderWrapper = styled.div`
  position: ${(props) => (props.Fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.OverridePage ? "999999999999" : "999")};
  background-color: ${(props) => (props.White ? "rgba(255, 255, 255, 0.8)" : "")};
  background-color: ${(props) => (props.WhiteLess ? "rgba(255, 255, 255, 0.5)" : "")};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s ease;
`;

// Sitemap Canvas

export const SitemapTab = css`
  background-color: ${theme.colors.appButtonBackground};
  border-color: ${theme.colors.appButtonBorder};
  color: ${theme.colors.appButtonText};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: 400;
  text-align: center;
  user-select: none;
  font-size: 0.85em;
  transition: all 0.15s ease-out;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0.85em 1.5em;
`;

export const StyledSitemap = styled.div`
  // **** Cascade Tree from here ****

  .mix-view.tree-con .tree-children {
    list-style: none;
    white-space: nowrap;
    margin-left: 5px;
  }
  .mix-view.tree-con .tree-children .single.tree-leaf {
    margin: 0 0 0 -5px;
  }
  .mix-view.tree-con .tree-children .single.tree-leaf > .tree-node:before {
    border: none;
  }
  .mix-view.tree-con .tree-children .single.tree-leaf > .tree-node:after {
    margin-top: -1px;
  }
  .mix-view.tree-con .tree-children .tree-leaf {
    display: inline-block;
    margin: 0 0 0 -5px;
    padding: 0;
    vertical-align: top;
  }
  .mix-view.tree-con .tree-children .first.tree-leaf > .tree-node:before {
    left: 20px;
  }
  .mix-view.tree-con .tree-children .last.tree-leaf > .tree-node:before {
    left: 20px;
    right: auto;
  }
  .mix-view.tree-con .tree-children .tree-node {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 0 20px -5px;
  }
  .mix-view.tree-con .tree-children .tree-node .accept.page {
    background-color: #cccccc !important;
  }
  .mix-view.tree-con .tree-children .tree-node .mark.page {
    background-color: #e4e5e9 !important;
  }
  .mix-view.tree-con .tree-children .tree-node .bg.aicon {
    width: 100%;
  }
  .mix-view.tree-con .tree-children .tree-node .bc {
    left: 50%;
    bottom: -25px;
    z-index: 9999;
  }
  .mix-view.tree-con .tree-children .tree-node .aicon {
    position: absolute;
    font-size: 20px;
    display: none;
    cursor: pointer;
    color: #888888;
    left: 52px;
  }
  .mix-view.tree-con .tree-children .tree-node .aicon .sm.fa {
    font-size: 18px;
  }
  .mix-view.tree-con .tree-children .tree-node .aicon .red.fa {
    color: #ff0041;
  }
  .mix-view.tree-con .tree-children .tree-node .aicon .green.fa {
    color: #24d69f;
  }
  .mix-view.tree-con .tree-children .tree-node .aicon .mg-15.fa {
    margin-right: 10px;
  }
  .mix-view.tree-con .tree-children .tree-node .aicon .ic-hldb {
    padding: 0 15px 5px 15px;
  }
  .mix-view.tree-con .tree-children .tree-node .aicon .ic-hld {
    position: absolute;
    left: 54px;
    top: -48px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
  }
  .mix-view.tree-con .tree-children .tree-node .aicon .op.fa {
    background: none;
  }
  .mix-view.tree-con .tree-children .tree-node .aicon .fa {
    background: #ffffff;
    width: 17px;
    height: 20px;
    border-radius: 50%;
  }
  .mix-view.tree-con .tree-children .tree-node .dis.page-ta {
    pointer-events: none;
  }
  .mix-view.tree-con .tree-children .tree-node .page-ta {
    cursor: text;
    width: 100%;
    margin: 0px;
    vertical-align: middle;
    resize: none;
    overflow: hidden;
    outline: none;
    border: none;
    color: black;
    padding: 0px;
    text-align: center;
    -webkit-user-select: text;
    background: transparent;
    line-height: normal;
    height: 19px;
    font-size: 13px;
    font-weight: 400;
    text-rendering: optimizeLegibility;
  }
  .mix-view.tree-con .tree-children .tree-node .ntm {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 0 15px;
    border-color: transparent transparent transparent #888888;
    position: absolute;
    margin-left: 126px;
    top: 0px;
    left: 0;
    background-color: #f9fafc;
  }
  .mix-view.tree-con .tree-children .tree-node .ntm2 {
    position: absolute;
    top: -2px;
    background-color: #f9fafc;
    width: 20px;
    height: 17px;
    left: 0;
    margin-left: 128px;
  }
  .mix-view.tree-con .tree-children .tree-node .sort {
    border-right: 4px solid #ff0041;
    height: 50px;
    position: absolute;
    right: -8px;
    top: -10px;
    display: none;
    z-index: 1000;
  }
  .mix-view.tree-con .tree-children .tree-node .sel.page {
    border: 1px solid rgba(255, 0, 65, 0.6);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  }
  .mix-view.tree-con .tree-children .tree-node .page {
    position: relative;
    color: #506e91;
    text-align: center;
    padding: 14px 5px 14px 5px;
    border: 1px solid #cbd6e2;
    background-color: #eaf0f6;
    font-size: 13px;
    line-height: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 130px;
    display: inline-block;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: normal;
    border-radius: 4px;
  }
  .mix-view.tree-con .tree-children .tree-node .page .show.cps-ic {
    transform: rotate(0deg);
  }
  .mix-view.tree-con .tree-children .tree-node .page .cps-ic {
    transform: rotate(180deg);
    display: none;
    position: absolute;
    bottom: -12px;
    left: -12px;
    font-size: 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    color: #333333;
    z-index: 10;
  }
  .mix-view.tree-con .tree-children .tree-node .page .cps-ic .fa-ic {
    background: #ffffff;
    border-radius: 50%;
    height: 1em;
    width: 1em;
    border: 1px solid #cccccc;
  }
  .mix-view.tree-con .tree-children .tree-node .page .opt-ic {
    display: none;
    position: absolute;
    top: -12px;
    left: -12px;
    font-size: 18px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    color: #333333;
    color: rgba(255, 0, 65, 0.5);
    z-index: 10;
  }
  .mix-view.tree-con .tree-children .tree-node .page .opt-ic .fa-ic {
    background: #ffffff;
    border-radius: 50%;
    height: 1em;
    width: 1em;
  }
  .mix-view.tree-con .tree-children .tree-node .over.page-drop-target {
    width: 130px;
    margin-left: 10px;
    margin-right: 10px;
    border-color: #ffffff;
    background-color: #cccccc;
  }
  .mix-view.tree-con .tree-children .tree-node .page-drop-target {
    height: 50px;
    width: 10px;
    position: relative;
    align-self: flex-start;
  }
  .mix-view.tree-con .tree-children .tree-node:before {
    content: " ";
    position: absolute;
    border-top: 1px solid #c0c2c5;
    top: -10px;
    left: 0;
    right: -10px;
  }
  .mix-view.tree-con .tree-children .tree-node:after {
    content: " ";
    border-left: 1px solid #c0c2c5;
    height: 10px;
    position: absolute;
    top: -10px;
    left: 20px;
  }
  .mix-view.tree-con .tree-children .root.tree-leaf > .tree-node:after {
    border: none;
  }
  .mix-view.tree-con .tree-children .root.tree-leaf > .tree-node:before {
    border: none;
  }
  .mix-view.tree-con .tree-children .root.tree-leaf > .tree-node {
    justify-content: center;
  }
  .mix-view.tree-con .tree-children .root.tree-leaf > .tree-node > .aicon {
    left: auto;
  }
  .mix-view.tree-con .tree-children .root.tree-leaf > .tree-node > .ntm {
    margin-left: 58px;
    left: 50%;
  }
  .mix-view.tree-con .tree-children .root.tree-leaf > .tree-node > .ntm2 {
    margin-left: 60px;
    left: 50%;
  }
  .mix-view.tree-con .tree-children .nochilds.page:after {
    border: none;
  }
  .mix-view.tree-con .tree-children .page:after {
    content: " ";
    border-left: 1px solid #c0c2c5;
    height: 10px;
    position: absolute;
    bottom: -10px;
    left: 10px;
  }
  .mix-view.tree-con .tree-children .page-root:after {
    left: 50%;
  }
  @media print {
    .mix-view.tree-con .tree-node .page {
      webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      border-color: #c0c2c5;
    }
  }
  .mix-view.tree-con .tree-children > .tree-leaf > .tree-children > .tree-leaf > .tree-children {
    margin-left: 30px;
    padding-left: 0;
    list-style: none;
    white-space: nowrap;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-leaf {
    display: block;
    margin: 0 0 0 -5px;
    padding: 0;
    vertical-align: top;
    position: relative;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-leaf:after {
    bottom: -35px;
    border-left: 1px solid #c0c2c5;
    content: " ";
    left: -8px;
    margin-left: -0.035em;
    position: absolute;
    top: 0px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .last.tree-leaf:after {
    border: none;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .last.tree-leaf
    > .tree-node:after {
    border: none;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node {
    position: relative;
    margin: -10px 0 10px 0;
    display: block;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .accept.page {
    background-color: #cccccc !important;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .mark.page {
    background-color: #e4e5e9 !important;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .bc {
    bottom: -15px;
    margin-left: -1px;
    left: 50%;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .aicon {
    position: absolute;
    font-size: 20px;
    display: none;
    cursor: pointer;
    color: #888888;
    left: 45px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .aicon
    .ic-hldb {
    padding: 0 15px 5px 15px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .aicon
    .sm.fa {
    font-size: 18px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .aicon
    .red.fa {
    color: #ff0041;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .aicon
    .green.fa {
    color: #24d69f;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .aicon
    .block.fa {
    display: block;
    margin-top: 2px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .aicon
    .mg-15.fa {
    margin-right: 3px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .aicon
    .ic-rm {
    left: -156px;
    background: #ffffff;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .aicon
    .fa {
    background: #ffffff;
    width: 17px;
    height: 20px;
    border-radius: 50%;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .dis.page-ta {
    pointer-events: none;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .page-ta {
    cursor: text;
    width: 100%;
    margin: 0px;
    vertical-align: middle;
    resize: none;
    overflow: hidden;
    outline: none;
    border: none;
    color: black;
    padding: 0px;
    text-align: center;
    -webkit-user-select: text;
    background: transparent;
    line-height: normal;
    height: 19px;
    font-size: 13px;
    font-weight: 400;
    text-rendering: optimizeLegibility;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .ntm {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 0 15px;
    border-color: transparent transparent transparent #888888;
    position: absolute;
    margin-left: 120px;
    top: 10px;
    left: 0;
    background-color: #f9fafc;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .ntm2 {
    position: absolute;
    top: 7px;
    background-color: #f9fafc;
    width: 20px;
    height: 17px;
    left: 0;
    margin-left: 122px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .sort {
    border-right: 4px solid #ff0041;
    height: 50px;
    position: absolute;
    right: -8px;
    top: -10px;
    display: none;
    z-index: 1000;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .sel.page {
    border: 1px solid rgba(255, 0, 65, 0.6);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .page {
    position: relative;
    color: #506e91;
    text-align: center;
    padding: 14px 5px 14px 5px;
    border: 1px solid #cbd6e2;
    background-color: #eaf0f6;
    font-size: 13px;
    line-height: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 130px;
    display: inline-block;
    margin: 0 5px 0 5px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: normal;
    border-radius: 4px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .page
    .show.cps-ic {
    transform: rotate(0deg);
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .page
    .cps-ic {
    transform: rotate(180deg);
    display: none;
    position: absolute;
    bottom: -12px;
    left: -12px;
    font-size: 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    color: #333333;
    z-index: 10;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .page
    .cps-ic
    .fa-ic {
    background: #ffffff;
    border-radius: 50%;
    height: 1em;
    width: 1em;
    border: 1px solid #cccccc;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .page
    .opt-ic {
    display: none;
    position: absolute;
    top: -12px;
    left: -12px;
    font-size: 18px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    color: #333333;
    color: rgba(255, 0, 65, 0.5);
    z-index: 10;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .page
    .opt-ic
    .fa-ic {
    background: #ffffff;
    border-radius: 50%;
    height: 1em;
    width: 1em;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .over.page-drop-target {
    padding: 10px 0 10px 0;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .over.page-drop-target
    .drop-box {
    height: 50px;
    border-color: #ffffff;
    background-color: #cccccc;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .page-drop-target {
    width: 130px;
    position: relative;
    margin-left: 5px;
    height: auto;
    align-self: stretch;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node
    .page-drop-target
    .drop-box {
    height: 10px;
    transition: height 0.1s;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .single.tree-leaf
    > .tree-node:before {
    top: 25px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .child.tree-leaf
    > .tree-node:before {
    top: 25px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .last.tree-leaf
    > .tree-node:before {
    top: 25px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node:before {
    border-top: 1px solid #c0c2c5;
    content: " ";
    left: -9px;
    width: 25px;
    position: absolute;
    top: 25px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .tree-node:after {
    border-left: 1px solid #c0c2c5;
    content: " ";
    left: -9px;
    position: absolute;
    top: -2px;
    height: 28px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .child.tree-leaf:after {
    bottom: -25px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .first.tree-leaf:after {
    bottom: -25px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .first.tree-leaf
    > .tree-node
    > .ntm2 {
    top: 8px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .first.tree-leaf
    > .tree-node
    > .ntm {
    top: 10px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .root.tree-leaf:after {
    border: none;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .root.tree-leaf
    > .tree-node:before {
    border: none;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .root.tree-leaf
    > .tree-node:after {
    border: none;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .root.tree-children {
    padding-left: 0px;
    margin-left: 0px;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .nochilds.page:after {
    border: none;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .single.tree-leaf:after {
    border: none;
  }
  .mix-view.tree-con
    .tree-children
    > .tree-leaf
    > .tree-children
    > .tree-leaf
    > .tree-children
    .single.tree-leaf:after
    > .tree-node:before {
    border: none;
  }

  // Overrides

  // .mix-view {
  //   &.tree-con {
  //     .tree-children {
  //       .tree-node {
  //         .page {
  //           ${SitemapTab}
  //         }
  //       }
  //     }
  //   }
  // }

  // **** End Cascade Tree from here ****

  // **** Horizontal Tree from here ****

  // .tree,
  // .tree ul,
  // .tree li {
  //   list-style: none;
  //   margin: 0;
  //   padding: 0;
  //   position: relative;
  // }

  // .tree {
  //   margin: 0 0 1em;
  //   text-align: center;
  // }
  // .tree,
  // .tree ul {
  //   display: table;
  // }
  // .tree ul {
  //   width: 100%;
  // }
  // .tree li {
  //   display: table-cell;
  //   padding: 0.5em 0;
  //   vertical-align: top;
  // }

  // .tree li:before {
  //   outline: solid 1px #cbd6e2;
  //   content: "";
  //   left: 0;
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  // }
  // .tree li:first-child:before {
  //   left: 50%;
  // }
  // .tree li:last-child:before {
  //   right: 50%;
  // }

  // .tree code {
  //   border: solid 0.1em #cbd6e2;
  //   border-radius: 0.2em;
  //   display: inline-block;
  //   margin: 0 0.2em 0.5em;
  //   padding: 0.2em 0.5em;
  //   position: relative;
  // }

  // .tree span {
  //   margin: 0 0.2em 0.5em;
  //   position: relative;
  //   ${SitemapTab}
  //   overflow: unset;
  //   vertical-align: unset;
  //   &.invalid {
  //     background-color: #ff606085;
  //     transition: 0.2s ease;
  //     color: #fff;
  //   }
  // }
  // .tree code {
  //   font-family: monaco, Consolas, "Lucida Console", monospace;
  // }

  // .tree ul:before,
  // .tree code:before,
  // .tree span:before {
  //   outline: solid 1px #cbd6e2;
  //   content: "";
  //   height: 0.5em;
  //   left: 50%;
  //   position: absolute;
  // }
  // .tree ul:before {
  //   top: -0.5em;
  // }
  // .tree code:before,
  // .tree span:before {
  //   top: -0.55em;
  // }
  // .tree > li {
  //   margin-top: 0;
  // }
  // .tree > li:before,
  // .tree > li:after,
  // .tree > li > code:before,
  // .tree > li > span:before {
  //   outline: none;
  // }

  // **** End Horizontal Tree from here ****

  // Customizations

  // li {
  //   &.has-nested-children {
  //     > ul {
  //       display: flex;
  //       flex-direction: column;
  //       > li {
  //         &:before {
  //           display: none;
  //         }
  //         padding-bottom: 0;
  //         > span {
  //           margin-bottom: 0;
  //         }
  //       }
  //     }
  //   }
  // }
`;
