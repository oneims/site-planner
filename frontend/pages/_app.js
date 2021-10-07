import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-sortable-tree-patch-react-17/style.css";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "styles/ThemeConfig";
import ProjectWizardProvider from "providers/ProjectWizardProvider";
import ProjectProvider from "providers/ProjectProvider";
import ShareProvider from "providers/ShareProvider";

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
    } else if (router.pathname.startsWith("/project/")) {
      return (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <ProjectProvider {...this.props} />
          </ThemeProvider>
        </>
      );
    } else if (router.pathname.startsWith("/share/")) {
      return (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <ShareProvider {...this.props} />
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
