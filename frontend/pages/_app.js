import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import ProjectWizardProvider from "providers/ProjectWizardProvider";
import ProjectProvider from "providers/ProjectProvider";
import { theme, GlobalStyle } from "styles/ThemeConfig";

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
