import React, { Component } from "react";
import WizardLayout from "../base/WizardLayout";

class ProjectWizardProvider extends Component {
  state = {
    // Step One
    project_name:
      typeof window !== "undefined" && window.localStorage.getItem("project_name")
        ? JSON.parse(localStorage.project_name)
        : "",
    // Step Two
    project_industry:
      typeof window !== "undefined" && window.localStorage.getItem("project_industry")
        ? JSON.parse(localStorage.project_industry)
        : "",
    // Action Level State
    currentStep: "",
    backDestination: "",
    nextDestination: "",
    nextButtonState: "disabled",
    nextButtonText: "Next",
    clearedStepOne:
      typeof window !== "undefined" && window.localStorage.getItem("clearedStepOne")
        ? JSON.parse(localStorage.clearedStepOne)
        : false,
    clearedStepTwo:
      typeof window !== "undefined" && window.localStorage.getItem("clearedStepTwo")
        ? JSON.parse(localStorage.clearedStepTwo)
        : false,
    loading: false,
    error: false,
  };

  updateHeaderState = (newStep, newBackDestination, newNextDestination, newButtonText) => {
    this.setState({
      currentStep: newStep,
      backDestination: newBackDestination,
      nextDestination: newNextDestination,
      nextButtonText: newButtonText,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (typeof window !== "undefined") {
      localStorage.setItem(event.target.name, JSON.stringify(event.target.value));
    }
    this.updateNextSteps();
  };

  updateStepOneButtonState = () => {
    setTimeout(() => {
      if (this.state.currentStep === "step__one") {
        if (this.state.project_name) {
          this.setState({
            nextButtonState: "enabled",
            clearedStepOne: true,
          });
          if (typeof window !== "undefined") {
            localStorage.setItem("clearedStepOne", true);
          }
        } else {
          this.setState({
            nextButtonState: "disabled",
            clearedStepOne: false,
          });
          if (typeof window !== "undefined") {
            localStorage.setItem("clearedStepOne", false);
          }
        }
      }
    }, 10);
  };

  updateStepTwoButtonState = () => {
    setTimeout(() => {
      if (this.state.currentStep === "step__two") {
        if (this.state.project_industry) {
          this.setState({
            nextButtonState: "enabled",
            clearedStepTwo: true,
          });
          if (typeof window !== "undefined") {
            localStorage.setItem("clearedStepTwo", true);
          }
        } else {
          this.setState({
            nextButtonState: "disabled",
            nextButtonToolTip: "Please complete the fields",
            clearedStepTwo: false,
          });
          if (typeof window !== "undefined") {
            localStorage.setItem("clearedStepTwo", false);
          }
        }
      }
    }, 100);
  };

  updateNextSteps = () => {
    this.updateStepOneButtonState();
  };

  render() {
    const { Component, pageProps } = this.props;
    const { currentStep, backDestination, nextDestination, nextButtonText, nextButtonState } =
      this.state;
    return (
      <WizardLayout
        currentStep={currentStep}
        backDestination={backDestination}
        nextDestination={nextDestination}
        nextButtonText={nextButtonText}
        nextButtonState={nextButtonState}
      >
        <Component
          handleChange={this.handleChange}
          updateHeaderState={this.updateHeaderState}
          updateStepOneButtonState={this.updateStepOneButtonState}
          updateStepTwoButtonState={this.updateStepTwoButtonState}
          {...this.state}
          {...pageProps}
        />
      </WizardLayout>
    );
  }
}

export default ProjectWizardProvider;
