import React, { Component } from "react";
import "./Experinece.css";
import agi from "./../images/agiLogo.png";
import apple from "./../images/apple.png";
import sjsu from "./../images/logo-sjsu.svg";
import tcs from "./../images/tcs1.png";
import { AiFillApple } from "react-icons/ai";
class Experience extends Component {
  state = {};
  render() {
    return (
      <div className=" container-fluid myexperience">
        <div className="row">
          <h1 style={{ textAlign: "center", color: "white" }}>Background</h1>
        </div>
        <div className="row">
          <div className="col-sm exp-box exp-box-mob">
            <img src={sjsu} className="exp-box-img"></img>
            <p className="exp-box-p">
              Master's in Software Engineering <br></br>
              2022 - 2023
            </p>
          </div>

          <div className="col-sm exp-box exp-box-mob">
            {" "}
            <img src={tcs} className="exp-box-img"></img>
            <p className="exp-box-p">
              Software Developer <br></br>
              2020 - 2022
            </p>
          </div>
          <div className="col-sm exp-box exp-box-mob">
            <AiFillApple fontSize={"50px"} style={{ paddingLeft: "10px" }} />
            <p className="exp-box-p">
              Software Developer Contractor<br></br>
              2020 - 2022
            </p>
          </div>
          <div className="col-sm exp-box exp-box-mob">
            <img src={agi} className="exp-box-img"></img>
            <p className="exp-box-p">
              Bachelor's in Information Technology <br></br>
              2016 - 2020
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
