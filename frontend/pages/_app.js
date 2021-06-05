import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ProjectWizardProvider from "@/components/app/providers/ProjectWizardProvider";

const theme = {
  primary: "#345dee",
  primaryHover: "#2143bd",
  secondary: "#111827",
  secondaryHover: "#374051",
  purple: "#a855f7",
  red: "#ec4899",
  orange: "#fb923c",
  green: "#4ade80",
  dark: "#111827",
  white: "#fff",
  lightGray: "#eee",
  gray: "#6b7280",
  sectionWhite: "#fff",
  sectionLightPrimary: "#06b6d40f",
  defaultBorderRadius: "0.25rem",
  primaryBoxShadow: "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
};

const GlobalStyle = createGlobalStyle`
body,
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial,
    sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  @media (min-width: 768px) {
    overflow-x: hidden;
  }
  color: #333;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 800;
  color: #000;
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
    transition: all 0.4s ease 0.2s;
    height: 3px;
    opacity: 0.5;
    background-color: rgb(0, 85, 255);
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


// Utils

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

`;

class MyApp extends Component {
  render() {
    const { Component, pageProps, router } = this.props;
    if (router.pathname.startsWith("/project-wizard/")) {
      return (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <ProjectWizardProvider {...this.props} />
          </ThemeProvider>
        </>
      );
    } else {
      return (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      );
    }
  }
}

export default MyApp;
