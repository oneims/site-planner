import React, { Component } from "react";

class ProjectWizardProvider extends Component {
  state = {
    currentStep: "",
  };

  updateHeaderState = (newStep, newBackDestination, newNextDestination, newButtonText) => {
    this.setState({
      currentStep: newStep,
      backDestination: newBackDestination,
      nextDestination: newNextDestination,
      nextButtonText: newButtonText,
    });
  };

  render() {
    const { Component, pageProps } = this.props;
    return <Component updateHeaderState={this.updateHeaderState} {...this.state} {...pageProps} />;
  }
}

export default ProjectWizardProvider;
