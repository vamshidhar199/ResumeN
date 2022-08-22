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
          <div class="col-sm card-padding">
            <HomeCards
              projectname="e-Diligence Predict"
              description={description.ediligence}
            />
          </div>
          <div class="col-sm card-padding">
            <HomeCards
              projectname="Walmart Sales Prediction"
              description={description.walmart}
            />
          </div>
          <div class="col-sm card-padding">
            <HomeCards
              projectname="Crypto Tracker"
              description={description.crypto}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGrid;
