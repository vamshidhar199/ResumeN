import React, { Component } from "react";
import AboutMeCard from "./AboutMeCard";
import myimage from "./../images/ProfileNew.jpeg";
import "./AboutMe.css";
import Overview from "./Overview";
class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ marginBottom: "10px" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>About Me</h1>
        </div>
        <div className="row">
          <div className="col-sm image-container">
            <img
              src={myimage}
              height="420vw"
              style={{ borderRadius: "5px" }}
            ></img>
          </div>
          <div className="col-sm aboutMeCardStyle">
            <AboutMeCard />
          </div>
          <div
            className="col-sm  image-container"
            // style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Overview />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
