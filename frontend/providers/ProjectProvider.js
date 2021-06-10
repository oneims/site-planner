import React, { Component } from "react";
import ProjectLayout from "/components/app/base/ProjectLayout";

class ProjectWizardProvider extends Component {
  state = {};

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ProjectLayout>
        <Component {...this.state} {...pageProps} />
      </ProjectLayout>
    );
  }
}

export default ProjectWizardProvider;
