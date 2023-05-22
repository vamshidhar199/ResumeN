import React, { Component } from "react";
import "./Footer.css";
import {
  AiOutlineVerticalAlignBottom,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid footer">
        <div className="row inside-footer">
          <h3>Liked my profile ?</h3>
        </div>
        <div className="row ">
          <div className="col-sm-4 contactme"></div>
          <div className="col-sm-6">
            <div className="row contactme">
              <div className="col-sm-6 contactmeMobile">
                <h4>Feel free to contact me at</h4>
              </div>
              <div className="col-sm-6 contactmeMobile">
                {" "}
                <AiFillPhone
                  style={{
                    color: "black",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.open("https://wa.me/+16194968541", "_blank");
                  }}
                />
                {/* </div>
              <div className="col-sm-1 contactmeMobile"> */}
                <AiFillMail
                  style={{
                    color: "black",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.href = "mailto:vparupally@gmail.com";
                  }}
                />
                {/* </div>
              <div className="col-sm-1 contactmeMobile"> */}
                <AiFillLinkedin
                  style={{
                    color: "black",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/vamshidhar-reddy-parupally-550080170/",
                      "_blank"
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
