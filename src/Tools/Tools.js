import React, { Component } from "react";
import Tooltip from "@mui/material/Tooltip";
import "./Tools.css";
import {
  DiReact,
  DiSpark,
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiDocker,
  DiPython,
} from "react-icons/di";
import {
  SiApachekafka,
  SiJavascript,
  SiRedux,
  SiKubernetes,
  SiMysql,
  SiMongodb,
  SiSpringboot,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import DialogBox from "./DialogBox";
class Tools extends Component {
  state = {
    showDialogBox: false,
  };
  toggle = () => {
    this.setState({ showDialogBox: !this.state.showDialogBox });
  };
  render() {
    return (
      <div className="container-fluid mobileClass" style={{ fontSize: "20px" }}>
        <div className="row" style={{ marginBottom: "10px" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>Technologies</h1>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          <div
            className=""
            // style={{ display: "flex", justifyContent: "flex-end" }}
          >
            {" "}
            {/* <div className="experience ">
              <div className="row">
                <div className="col-sm">
                  <DiReact style={{ fontSize: "50px" }} />
                  <p>React JS</p>
                </div>
                <div className="col-sm">
                  <DiSpark style={{ fontSize: "50px" }} />
                  <p>Apache Spark</p>
                </div>
                <div className="col-sm">
                  <SiApachekafka style={{ fontSize: "50px" }} />
                  <p>Apache Kafka</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <DiJava style={{ fontSize: "50px" }} />
                  <p>Java</p>
                </div>
                <div className="col-sm">
                  <DiJavascript1 style={{ fontSize: "40px" }} />
                  <p>Java Script</p>
                </div>
                <div className="col-sm">
                  <SiRedux style={{ fontSize: "50px" }} />
                  <p>Redux</p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="col-sm">
            <div className="row techBack">
              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <DiJava style={{ fontSize: "50px" }} />
                  <p>Java</p>
                </div>
              </div>

              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <DiReact style={{ fontSize: "50px", marginLeft: "10px" }} />
                  <p>React JS</p>
                </div>
              </div>

              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <DiNodejs style={{ fontSize: "50px", marginLeft: "10px" }} />
                  <p>Node JS</p>
                </div>
              </div>

              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <SiSpringboot
                    style={{ fontSize: "50px", marginLeft: "25%" }}
                  />
                  <p>Spring Boot</p>
                </div>
              </div>
              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <SiApachekafka style={{ fontSize: "50px" }} />
                  <p>Kafka</p>
                </div>
              </div>

              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <GiArtificialIntelligence
                    style={{ fontSize: "50px", marginLeft: "12.54%" }}
                  />
                  <p>Open AI</p>
                </div>
              </div>
              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <DiJavascript1
                    style={{ fontSize: "50px", marginLeft: "25%" }}
                  />
                  <p>Java Script</p>
                </div>
              </div>

              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <DiSpark style={{ fontSize: "50px" }} />
                  <p>Spark</p>
                </div>
              </div>
              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <DiDocker style={{ fontSize: "50px", marginLeft: "25%" }} />
                  <p>Docker</p>
                </div>
              </div>

              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <DiPython style={{ fontSize: "50px", marginLeft: "10px" }} />
                  <p>Python</p>
                </div>
              </div>

              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <SiMysql style={{ fontSize: "50px" }} />
                  <p>My SQL</p>
                </div>
              </div>
              <div
                className="col-sm tech"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <SiMongodb style={{ fontSize: "50px", marginLeft: "25%" }} />
                  <p>Mongo DB</p>
                </div>
              </div>
            </div>
            <div className="row techBack" style={{ textAlign: "center" }}>
              <p onClick={this.toggle} style={{ cursor: "pointer" }}>
                View More
              </p>
              {this.state.showDialogBox && <DialogBox toggle={this.toggle} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
