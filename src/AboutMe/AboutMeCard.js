import React, { Component } from "react";
import "./AboutMeCard.css";
import { MdBadge, MdCastForEducation } from "react-icons/md";

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
                17 months <br></br>of experience as<br></br>Software Developer
                Contractor<br></br> at <br></br>Apple
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="skills ">
              <h3 style={{ textAlign: "center" }}>
                <MdCastForEducation className="mobileIcon" />
              </h3>
              <p style={{ textAlign: "center" }}>
                Master's <br></br>in<br></br>Software Engineering<br></br>at
                <br></br> San Jose State University <br></br>San Jose,
                California
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="skills ">
              <h3 style={{ textAlign: "center" }}>
                <VscCode className="mobileIcon" />
              </h3>
              <p style={{ textAlign: "center" }}>
                250+ <br></br>questions<br></br>of<br></br>leetcode<br></br>{" "}
                this <br></br>year
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <div className="experience ">
              <h3></h3>
              <p>
                I am a self-motivated computer science student who values
                perseverance. Full Stack development and cloud computing are my
                main areas of interest. I enjoy working with data structures and
                algorithms because I am an active programmer. I'm searching for
                employment in the software industry where I can apply my skills
                and make a difference. Also, I'm ready to work tirelessly to
                take whatever necessary steps to accomplish my objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMeCard;
