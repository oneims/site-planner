import React, { Component } from "react";

class ProjectWizardProvider extends Component {
  state = {
    currentStep: "",
  };

  updateHeaderState = (newStep) => {
    this.setState({
      currentStep: newStep,
    });
  };

  render() {
    const { Component, pageProps } = this.props;
    return <Component updateHeaderState={this.updateHeaderState} {...this.state} {...pageProps} />;
  }
}

export default ProjectWizardProvider;
