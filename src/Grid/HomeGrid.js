import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "./HomeGrid.css";
import HomeCards from "../HomeCards/HomeCards";
class HomeGrid extends Component {
  state = {};

  render() {
    let description = {
      solarPanels:
        "This project focuses on improving the efficiency and accuracy of solar panel production by using artificial intelligence and machine learning techniques to automate the inspection process. The project utilizes a YOLO V8 model for anomaly detection from real-time video feed, along with a ROS pipeline on a Jetson developer kit for faster development and deployment. The goal is to create a robust and efficient system for the manufacturing industry to ensure optimal performance and longevity of solar panels.",
      airportManagement:
        "Developed airport management system web app using React JS, Node JS, and MongoDB. Provided comprehensive solution for managing flight schedules, employee logins, and added features such as adding flights, updating schedules, auto-assigning baggage carousels and gates",
      walmart:
        "Created Models using LSTM, and LightGBM, which was used to predict the future sales trends. Performed data pre-processing and cleaning along with feature selection and feature extraction. I have used Hyper tuning to improve the performance and accuracy of the model.",
      crypto:
        "A web application that uses real-time data about several crypto currencies available, to give users the newest trends they are interested in. To provide a seamless experience, I set up this application on the AWS cloud and utilized a load balancer to handle failed instances.",
      cascade:
        "Cascade is a central application for apple's sales details, which provides data to downstream applications. My role here was to work primarily on the UI and services (GSF). I have developed intuitive web designs and faster APIs to improve the efficiency of the application.",
      drowsiness:
        "It is an OpenCV project designed to alert the driver if he is feeling drowsy and alert him by generating sound to wake him thereby preventing fatal accidents. I have used OpenCV libraries for image recognition, and python and flask to develop user interface for this application.",
      drone:
        "Developed autonomous drone rental system for farm surveying and pesticide spraying using cloud mission planning and Ardupilot simulation. Designed to allow farmers to easily book services by registering their farm coordinates, ensuring drones fly to the correct location and return safely.",
      OpenAI:
        "In this project, I developed a salary analysis dashboard using data from the Stack Overflow Developer Survey and the OpenAI GPT turbo model. To ensure accurate and reliable analysis, I applied data preprocessing techniques to clean and transform the survey data. By leveraging various data visualization techniques, I created visually appealing charts and graphs that effectively conveyed salary insights. Working closely with my team, we collaborated on the design and optimization of the salary analysis dashboard, enabling us to provide actionable insights to stakeholders. This project aimed to empower decision-makers with a comprehensive understanding of salary trends and patterns within the developer community.",
    };
    let links = {
      solarPanels: "",
      airportManagement: "",
      walmart: "",
      crypto: "",
      cascade: "",
      drowsiness: "",
      drone: "https://github.com/vamshidhar199/CloudComputingDrone",
      OpenAI: "https://github.com/vamshidhar199/SalaryPredBi",
    };
    let Tools = {
      solarPanels:
        "Python, YOLO V8, NVIDIA ROS Platform, Jetson Developer Kit, React JS, Node JS, AWS S3.",
      airportManagement: "",
      walmart:
        "Python, LSTM Model, Regression Model, Light GBM Model, Google Co-Lab.",
      crypto: "",
      cascade:
        "Java, Javascript, Python, SQL, ReactJS, NodeJS, REST API / SOAP, Spring Boot, Kafka, Spark, AWS, Docker",
      drowsiness: "",
      drone:
        "Cloud Mission Planner, Ardu Pilot Simulator, React JS, Spring Boot, Bootstrap, Sockets, C++.",
      OpenAI:
        "Python, Open AI Model, Regression Model, GPT Turbo 3.5, Google Co-Lab, Streamlit.",
    };
    return (
      <div className="container-fluid homegrid-main">
        <div class="row">
          <h1
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            My Projects
          </h1>
        </div>
        <div class="row" style={{ marginRight: "10px" }}>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Autonomus Drone Rental System"
              description={description.drone}
              link={links.drone}
              Tools={Tools.drone}
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Anomaly Detection in Solar Panels"
              description={description.solarPanels}
              link={links.solarPanels}
              Tools={Tools.solarPanels}
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="OpenAI - Salary Analysis Dashboard"
              description={description.OpenAI}
              link={links.OpenAI}
              Tools={Tools.OpenAI}
            />
          </div>
        </div>
        <div class="row" style={{ marginRight: "10px" }}>
          {/* <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Crypto Tracker"
              description={description.crypto}
              link={links.crypto}
            />
          </div> */}
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Walmart Sales Prediction"
              description={description.walmart}
              link={links.walmart}
              Tools={Tools.walmart}
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Cascade [Project at Apple Inc]"
              description={description.cascade}
              link={links.cascade}
              Tools={Tools.cascade}
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Drowsiness Detection System"
              description={description.drowsiness}
              link={links.drowsiness}
              Tools={Tools.drowsiness}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGrid;
