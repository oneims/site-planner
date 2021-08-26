import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#818cf8",
    secondary: "#111827",
    headingColor: "#111827",
    bodyColor: "#4b505a",
    purple: "#a855f7",
    red: "#ec4899",
    orange: "#fb923c",
    green: "#4ade80",
    dark: "#111827",
    white: "#fff",
    lightGray: "#eee",
    gray: "#6b7280",
    borderColor: "#eee",
    appHeadings: "#33475b",
    appBody: "#33475b",
    appButtonBackground: "#eaf0f6",
    appButtonBorder: "#cbd6e2",
    appButtonText: "#506e91",
  },
  hoverIntensity: 0.1,
  sectionWhite: "#fff",
  sectionLightPrimary: "#06b6d40f",
  defaultBorderRadius: "0.25rem",
  primaryBoxShadow: "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
};

export const GlobalStyle = createGlobalStyle`

// **** SORTABLE LIST *****
.rst {
  &__rowContents {
    box-shadow: none;
    border: none;
    padding: 8px;
    display: flex;
    box-shadow: rgb(45 62 80 / 12%) 0px 1px 5px 0px;
    background-color: #f5f8fa;
    font-weight: 500;
  }
  &__nodeContent {
    z-index: 1;
  }
  &__row {
    border-radius: 3px;
    border: 1px solid #cbd6e2;
  }
  &__rowLabel {
    display: block;
    background-color: #fff;
    width: 100%;
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    font-size: 1rem;
    border: 2px solid #eee;
  }
  &__rowLandingPad {
    &::before, &::after {
      z-index: 0;
      transition: 0.2s ease;
    }
  }
  &__rowTitle {
    font-weight: inherit;
    input {
      font-size: 0.9rem !important;
      outline: none;
      padding: 0;
      margin: 0;
      border: none;
      color: ${theme.colors.appBody}
    }
  }
}
.rst__moveHandle, .rst__loadingHandle {
  background-color: #fff;
  border: none;
  border-right: 1px solid #cbd6e2;
  width: 35px;
  box-shadow: none;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D'5px'%20height%3D'24px'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%205px%2024px'%3E%3Cpath%20fill%3D'%23516f90'%20d%3D'M0%200h2v2H0V0zm0%208h2v2H0V8zm0%208h2v2H0v-2zM0%204h2v2H0V4zm0%208h2v2H0v-2zm0%208h2v2H0v-2zM3%200h2v2H3V0zm0%208h2v2H3V8zm0%208h2v2H3v-2zM3%204h2v2H3V4zm0%208h2v2H3v-2zm0%208h2v2H3v-2z'%2F%3E%3C%2Fsvg%3E");
}

.rst__collapseButton:hover:not(:active), .rst__expandButton:hover:not(:active) {
  background-size: 22px;
  height: 18px;
  width: 18px;
}

.rst__lineHalfHorizontalRight::before, .rst__lineFullVertical::after, .rst__lineHalfVerticalTop::after, .rst__lineHalfVerticalBottom::after, .rst__lineChildren::after {
  background-color: #cbd6e2;
}

.rst__collapseButton, .rst__expandButton {
  box-shadow: 0 0 0 1px #cbd6e2;
}

.react-transform-wrapper {
  &.theme__transform-wrapper {
    height: 100%;
    width: 100%;
    // overflow: unset;
    // cursor: grab;
  }
}

.react-transform-component {
  &.theme__transform-component {
    // cursor: grab;
  }
}


// ******* THEME ******

body,
html {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial,
    sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  @media (min-width: 768px) {
    overflow-x: hidden;
  }
  color: ${theme.colors.bodyColor};
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 800;
  color: ${theme.colors.headingColor};
}

button,
input,
select,
textarea {
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

.container {
  @media (min-width: 1300px) {
    max-width: 1216px;
  }
}

.text-inverted {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  p,
  ul li,
  ol li,
  blockquote {
    color: #fff;
  }
  color: #fff;
}

h1,
.h1 {
  @media (min-width: 992px) {
    font-size: 3.5rem;
  }
}

h2,
.h2 {
  @media (min-width: 992px) {
    font-size: 3rem;
  }
}

h3,
.h3 {
  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
}

h4,
.h4 {
  @media (min-width: 992px) {
    font-size: 2rem;
  }
}

h5,
.h5 {
  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
}

h6,
.h6 {
  @media (min-width: 992px) {
    font-size: 1rem;
  }
}

.step {
  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    max-width: 0px;
    transition: all 0.4s ease 0.1s;
    height: 3px;
    opacity: 0.7;
    background-color: ${theme.colors.primary};
  }
  &__one {
    &:before {
    max-width: 25%;
    }
  }
  &__two {
    &:before {
    max-width: 50%;
    }
  }
  &__three {
    &:before {
    max-width: 75%;
    }
  }
}

.c-select {
  input {
    font-weight: 700;
  }
}

// Utils

.mh-90vh {
  min-height: 90vh;
}

.mw-500 {
  max-width: 500px;
}

.mw-600 {
  max-width: 600px;
}

.mw-700 {
  max-width: 700px;
}

.mw-800 {
  max-width: 800px;
}

.mw-900 {
  max-width: 900px;
}

.mw-1000 {
  max-width: 1000px;
}

.mh-negative {
  @media (max-width: 576px) {
    margin-left: -15px;
    margin-right: -15px;
  }
}

.w-sm-auto {
  @media (min-width: 576px) {
    width: auto !important;
  }
}

.restore-padding-sm {
  @media (min-width: 576px) {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

.theme {
  &__viewport-padding {
    padding-left: 15px;
    padding-right: 15px;
  }
  &__min-width {
    &-2000 {
      min-width: 2000px;
    }
  }
  &__min-height {
    &-400 {
      min-height: 400px;
    }
    &-500 {
      min-height: 500px;
    }
    &-600 {
      min-height: 600px;
    }
    &-100 {
      min-height: 100%;
    }
    &-2000 {
      min-height: 2000px;
    }
  }
  &__height {
    &-400 {
      height: 400px;
    }
    &-500 {
      height: 500px;
    }
    &-600 {
      height: 600px;
    }
    &-60vh {
      height: 60vh;
    }
    &-62vh {
      height: 62vh;
    }
    &-65vh {
      height: 65vh;
    }
    &-70vh {
      height: 70vh;
    }
    &-80vh {
      height: 80vh;
    }
    &-100 {
      height: 100%;
    }
  }
  &__overflow {
    &-y {
      overflow-y: scroll;
    }
    &-x {
      overflow-x: scroll;
    }
    &-hidden {
      overflow: hidden;
    }
  }
  &__border {
    border: 2px solid ${theme.colors.borderColor};
    &-radius-15 {
      border-radius: 15px;
    }
    &-radius-4 {
      border-radius: 4px;
    }
    &-radius-6 {
      border-radius: 6px;
    }
    &-radius-8 {
      border-radius: 8px;
    }
    &-radius-10 {
      border-radius: 10px;
    }
    &-top {
      border-top: 2px solid ${theme.colors.borderColor} 
    }
    &-bottom {
      border-bottom: 2px solid ${theme.colors.borderColor};
    }
  }
  &__solids {
    &-bg-white {
      background-color: ${theme.colors.white};
    }
  }
  &__position {
    &-sticky {
      position: sticky;
    }
  }
  &__top {
    &-0 {
      top: 0;
    }
  }
  &__z-index {
    &-1 {
      z-index: 1;
    }
  }
  &__canvas-background {
    background-image: radial-gradient(circle at 1px 1px, #5371939e 1px, transparent 0);
    background-size: 40px 40px;
  }
}

`;
