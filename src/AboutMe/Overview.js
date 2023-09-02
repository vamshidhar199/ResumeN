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
        <div
          className="row"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <div className="col-sm experienceTile">
            {/* <FaAmazon style={{ fontSize: "45px", marginTop: "10px" }} /> */}
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
              }
              className="exp-box-img"
            ></img>
            <h6> SDE Intern - Summer 2023</h6>
          </div>
        </div>
        <div
          className="row"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <div
            className="col-sm experienceTile"
            style={{ backgroundColor: "#09599e" }}
          >
            <img
              src={sjsu}
              className="exp-box-img"
              style={{ display: "inline", paddingLeft: "0px" }}
            ></img>
            <h6>Teaching Assistant 2022-2023</h6>
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
            ></img>
            {/* <AiFillApple fontSize={"50px"} style={{ paddingLeft: "0px" }} /> */}
            <h6>Software Developer 2020-2022</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
