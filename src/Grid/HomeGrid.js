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
      ediligence:
        " eDiligence is an AI enabled solution to predict and mitigate risk in real estate projects. e-Diligence predict is a React JS based web application that collects data from users and feeds it to the models and consumes the predictions to warn the users about the potential risks",
      walmart:
        "Created Models using LSTM, and LightGBM, which was used to predict the future sales trends. Performed data pre-processing and cleaning along with feature selection and feature extraction. I have used Hyper tuning to improve the performance and accuracy of the model.",
      crypto:
        "A web application that uses real-time data about several crypto currencies available, to give users the newest trends they are interested in. To provide a seamless experience, I set up this application on the AWS cloud and utilized a load balancer to handle failed instances.",
      cascade:
        "Cascade is a central application for apple's sales details, which provides data to downstream applications. My role here was to work primarily on the UI and services (GSF). I have developed intuitive web designs and faster APIs to improve the efficiency of the application.",
      drowsiness:
        "It is an OpenCV project designed to alert the driver if he is feeling drowsy and alert him by generating sound to wake him thereby preventing fatal accidents. I have used OpenCV libraries for image recognition, and python and flask to develop user interface for this application.",
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
              projectname="e-Diligence Predict"
              description={description.ediligence}
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Walmart Sales Prediction"
              description={description.walmart}
            />
          </div>
          <div class="col-sm card-padding card-paddingMob">
            <HomeCards
              projectname="Crypto Tracker"
              description={description.crypto}
            />
          </div>
        </div>
        <div class="row" style={{ marginRight: "10px" }}>
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
