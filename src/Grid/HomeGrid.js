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
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Airport Management System"
              description={description.airportManagement}
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Walmart Sales Prediction"
              description={description.walmart}
            />
          </div>
        </div>
        <div class="row" style={{ marginRight: "10px" }}>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Crypto Tracker"
              description={description.crypto}
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Cascade [Project at Apple Inc]"
              description={description.cascade}
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Drowsiness Detection System"
              description={description.drowsiness}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGrid;
