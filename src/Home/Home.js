import React, { Component } from "react";
import "./Home.css";

import Section1 from "../Sections/Section1";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="StyledDiv">
          {/* <section className="section1">
            <div className="NameSection">
              <div className="NameSection-styled">
                <ul className="ul-name">
                  <li>
                    <span className="font-style">
                      Parupally Vamshidhar Reddy
                    </span>
                    <div className="designation">
                      Master's Student at SJSU | Ex Software Developer at TCS
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section> */}

          <Section1 />

          <section className="section2">
            <div className="NameSection">
              <div className="NameSection-styled">
                <ul className="ul-name">
                  <li>
                    <span className="font-style font-style-gpa">
                      {/* Phone: (619) 496 8541 <br></br>Email: vparupally@gmail.com */}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section3">
            <div className="styledWidgetContainer">
              <div className="styledWidgets">
                <div className="listWidgets">
                  <div className="widgetsIcons">
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Home;
