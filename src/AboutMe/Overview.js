import React, { Component } from "react";
import { MdBadge, MdCastForEducation } from "react-icons/md";
import sjsu from "./../images/logo-sjsu.svg";
import amazon from "./../images/amazon1.png";
import { FaAmazon } from "react-icons/fa";
import agi from "./../images/agiLogo.png";

import "./Overview.css";
class Overview extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid overview">
        <div className="row" style={{ textAlign: "center" }}>
          <div
            className="col-sm experienceTile"
            style={{ display: "inline-block", borderRight: "1px solid white" }}
          >
            {/* <FaAmazon style={{ fontSize: "45px", marginTop: "10px" }} /> */}
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
              }
              className="exp-box-img"
              style={{ display: "inline", paddingLeft: "0px", width: "120px" }}
            ></img>
            <h6>Summer 2023</h6>
            <div className="row">
              <div className="col-sm" style={{ paddingLeft: "50px" }}>
                <p className="listing">SDE Intern </p>
                <p className="listing">Alexa Team </p>
              </div>
            </div>
          </div>
          <div
            className="col-sm experienceTile"
            style={{ backgroundColor: "#09599e" }}
          >
            <img
              src={sjsu}
              className="exp-box-img"
              style={{ display: "inline", paddingLeft: "0px" }}
            ></img>
            <h6>2022-2023</h6>
            <div className="row">
              <div className="col-sm" style={{ paddingLeft: "50px" }}>
                <p className="listing">Teaching Assistant </p>
                <p className="listing">Master's in Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <div
            className="col-sm experienceTile"
            style={{
              backgroundColor: "#5F68C3",
            }}
          >
            {/* <h4 style={{ color: "white", fontWeight: "800" }}>
              Tata Consultancy Services
            </h4> */}
            <img
              src={
                "https://www.tcs.com/content/dam/global-tcs/en/images/home/dark-theme.svg"
              }
              className="exp-box-img"
              style={{ display: "inline", paddingLeft: "0px", width: "160px" }}
            ></img>
            {/* <AiFillApple fontSize={"50px"} style={{ paddingLeft: "0px" }} /> */}
            <h6>2020-2022</h6>
            <div className="row">
              <div className="col-sm" style={{ paddingLeft: "50px" }}>
                <p className="listing">Software Developer</p>
                <p className="listing">Apple - Internal Projects</p>
              </div>
            </div>
          </div>

          <div
            className="col-sm experienceTile"
            style={{ display: "inline-block" }}
          >
            <img
              src={agi}
              className="exp-box-img"
              style={{ display: "inline", paddingLeft: "0px" }}
            ></img>
            <h6>2016-2020</h6>
            <div className="row">
              <div className="col-sm" style={{ paddingLeft: "50px" }}>
                <p className="listing">Bachelor's in Information Technology</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
