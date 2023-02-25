import React, { Component } from "react";
import "./AboutMeCard.css";
import { MdBadge, MdCastForEducation } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { VscCode } from "react-icons/vsc";
class AboutMeCard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid aboutMeMobile">
        <div className="row">
          <div className="col-sm-4">
            <div className="skills ">
              <h3 style={{ textAlign: "center" }}>
                <MdBadge className="mobileIcon" />
              </h3>
              <p style={{ textAlign: "center" }}>
                2 Years <br></br>of experience as<br></br>Software Developer
                Contractor at <br></br>Apple
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="skills ">
              <h3 style={{ textAlign: "center" }}>
                <MdCastForEducation className="mobileIcon" />
              </h3>
              <p style={{ textAlign: "center" }}>
                Master's in<br></br>Software Engineering<br></br>at
                <br></br> San Jose State University, San Jose, California
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="skills ">
              <h3 style={{ textAlign: "center" }}>
                <GiPoliceOfficerHead className="mobileIcon" />
              </h3>
              <p style={{ textAlign: "center" }}>
                Initiation Officer <br></br>@<br></br> Tau Beta Pie<br></br>{" "}
                Student Chapter, <br></br>SJSU
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <div className="experience ">
              <h3></h3>
              <p style={{ textAlign: "justify" }}>
                As a self-motivated computer science student with a passion for
                full-stack development and cloud computing, I possess a strong
                drive to apply my skills and make a meaningful impact in the
                software industry. I have a solid understanding of data
                structures and algorithms and regularly engage in programming
                activities to further my skills. I value perseverance and am
                committed to working tirelessly to achieve my goals. I am eager
                to join a dynamic and innovative software company where I can
                contribute my skills and grow as a professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMeCard;
