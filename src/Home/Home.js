import React, { Component } from "react";
import "./Home.css";

import Section1 from "../Sections/Section1";
import Experience from "../MyExperience/Experience";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Resume from "./../Resume/VamshidharReddyParupally.pdf";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Section3 from "../Sections/Section3";
import HomeGrid from "../Grid/HomeGrid";
import AboutMe from "../AboutMe/AboutMe";
import Tools from "../Tools/Tools";
import Footer from "../Footer/Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="StyledDiv">
          <Section1 />

          <section className="section2">
            <div className="NameSection" style={{ marginTop: "15px" }}>
              <div className="NameSection-styled">
                <ul className="ul-name">
                  <li className="ul-anim">
                    <span className="font-style font-style-gpa ">
                      Phone: (619) 496 8541 <br></br>Email: vparupally@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Section3 />
        </div>
        <AboutMe />
        <HomeGrid />
        <Tools />
        {/* footer */}
        <Experience />
        <Footer />
      </>
    );
  }
}

export default Home;
