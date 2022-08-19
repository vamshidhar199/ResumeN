import React, { Component } from "react";
import "./AboutMeCard.css";
class AboutMeCard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <div className="skills ">
              <h3></h3>
              <p style={{ textAlign: "center" }}>
                17 months <br></br>of experience<br></br>as<br></br>Software
                Developer Contractor<br></br> at <br></br>Apple
              </p>
            </div>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-2"></div>
        </div>

        <div className="row">
          <div className="col-sm">
            <div className="experience ">
              <h3></h3>
              <p>
                I am a self driven computer science enthusiast, and I believe in
                hard work. My area of interest lies in FullStack Development,
                Machine learning and Neural Networks. I am an avid coder and
                really like working with data structures and algorithms. I am
                looking to work in the software domain where I can put my skills
                to use and make a difference. At the same time I am willing to
                put in all my effort to do whatever it takes to achieve my
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMeCard;
