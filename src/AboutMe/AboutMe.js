import React, { Component } from "react";
import AboutMeCard from "./AboutMeCard";
class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ marginBottom: "50px" }}>
          <h1 style={{ textAlign: "left", color: "white" }}>About Me</h1>
        </div>
        <div className="row" style={{ padding: "0px 70px 0px 70px" }}>
          <div className="col-sm-6">
            <p>Images comes here</p>
          </div>
          <div className="col-sm-6">
            <AboutMeCard />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
