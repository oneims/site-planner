import React, { Component } from "react";
import Router from "next/router";
import axios from "axios";
import WizardLayout from "/components/app/base/WizardLayout";
import { generateUID, sleeper } from "/lib/Helpers";
import { Schema__001 } from "/lib/SitemapSchema";

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
    // Step Three
    number_of_pages:
      typeof window !== "undefined" && window.localStorage.getItem("number_of_pages")
        ? JSON.parse(localStorage.number_of_pages)
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

  handleSelectChange = (value, target) => {
    this.setState({
      [target.name]: value,
    });
    if (typeof window !== "undefined") {
      localStorage.setItem(target.name, JSON.stringify(value));
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

  updateStepThreeButtonState = () => {
    setTimeout(() => {
      if (this.state.currentStep === "step__three") {
        if (this.state.number_of_pages) {
          this.setState({
            nextButtonState: "enabled",
            clearedStepTwo: true,
          });
          if (typeof window !== "undefined") {
            localStorage.setItem("clearedStepThree", true);
          }
        } else {
          this.setState({
            nextButtonState: "disabled",
          });
        }
      }
    }, 100);
  };

  updateNextSteps = () => {
    this.updateStepOneButtonState();
    this.updateStepTwoButtonState();
    this.updateStepThreeButtonState();
  };

  handleSubmit = () => {
    const { project_name, project_industry, number_of_pages } = this.state;
    const PROJECT_UID = generateUID(process.env.NEXT_PUBLIC_UID_THRESHOLD);
    const SITEMAP_UID = generateUID(process.env.NEXT_PUBLIC_UID_THRESHOLD);
    const NEW_URL = `/project/${PROJECT_UID}/sitemap/${SITEMAP_UID}`;
    this.setState({
      loading: true,
    });
    const projectData = {
      name: project_name,
      industry: project_industry.value,
      number_of_pages: number_of_pages.value,
      UID: PROJECT_UID,
    };
    const sitemapData = {
      UID: SITEMAP_UID,
      title: "Untitled Sitemap",
      menu_schema: Schema__001,
      primary_color: {
        r: "234",
        g: "240",
        b: "246",
        a: "1",
      },
      border_color: {
        r: "203",
        g: "214",
        b: "226",
        a: "1",
      },
      text_color: {
        r: "80",
        g: "110",
        b: "145",
        a: "1",
      },
    };
    axios
      .all([
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/projects`, projectData),
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/sitemaps`, sitemapData),
      ])
      .then(sleeper(900))
      .then(
        axios.spread((projectResponse, sitemapResponse) => {
          console.log(projectResponse, sitemapResponse);
          const projectDBID = projectResponse.data.id;
          const sitemapDBID = sitemapResponse.data.id;
          axios
            .put(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectDBID}`, {
              sitemaps: sitemapDBID,
            })
            .then((res) => {
              localStorage.clear();
              Router.push(NEW_URL);
              this.setState({
                loading: false,
              });
            })
            .catch((err) => {
              alert("Oops, something went wrong! Please try again later.");
              console.log(err);
            });
        })
      )
      .catch((err) => {
        this.setState({
          loading: false,
        });
        alert("Oops, something went wrong! Please try again later.");
        console.log(err);
      });
  };

  render() {
    const { Component, pageProps } = this.props;
    const {
      currentStep,
      backDestination,
      nextDestination,
      nextButtonText,
      nextButtonState,
      loading,
    } = this.state;
    return (
      <WizardLayout
        currentStep={currentStep}
        backDestination={backDestination}
        nextDestination={nextDestination}
        nextButtonText={nextButtonText}
        nextButtonState={nextButtonState}
        handleSubmit={this.handleSubmit}
        loading={loading}
      >
        <Component
          handleChange={this.handleChange}
          handleSelectChange={this.handleSelectChange}
          updateHeaderState={this.updateHeaderState}
          updateStepOneButtonState={this.updateStepOneButtonState}
          updateStepTwoButtonState={this.updateStepTwoButtonState}
          updateStepThreeButtonState={this.updateStepThreeButtonState}
          {...this.state}
          {...pageProps}
        />
      </WizardLayout>
    );
  }
}

export default ProjectWizardProvider;
