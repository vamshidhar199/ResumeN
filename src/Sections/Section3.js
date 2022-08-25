import React, { Component } from "react";
import {
  AiOutlineVerticalAlignBottom,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import Resume from "./../Resume/VamshidharReddyParupally.pdf";
import Tooltip from "@mui/material/Tooltip";

class Section3 extends Component {
  state = {};
  render() {
    return (
      <section className="section3" style={{ marginTop: "-30px" }}>
        <div className="styledWidgetContainer">
          <div className="styledWidgets">
            <div className="listWidgets" style={{ padding: "0px" }}>
              <div className="widgetsIcons">
                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}> CV</Avatar> */}
                <a
                  href={Resume}
                  download="VamshidharReddyParupallyResume.pdf"
                  target="_blank"
                >
                  <Tooltip title="CV Download">
                    <AiOutlineVerticalAlignBottom
                      style={{ color: "white", fontSize: "30px" }}
                    />
                  </Tooltip>
                </a>
              </div>
              <div className="widgetsIcons">
                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}> CV</Avatar> */}
                <Tooltip title="LinkedIN">
                  <AiFillLinkedin
                    style={{ color: "white", fontSize: "30px" }}
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/vamshidhar-reddy-parupally-550080170/",
                        "_blank"
                      );
                    }}
                  />
                </Tooltip>
              </div>
              <div className="widgetsIcons">
                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}> CV</Avatar> */}
                <Tooltip title="Email Me">
                  <AiFillMail
                    style={{ color: "white", fontSize: "30px" }}
                    onClick={() => {
                      window.location.href = "mailto:vparupally@gmail.com";
                    }}
                  />
                </Tooltip>
              </div>
              <div className="widgetsIcons">
                <Tooltip title="Message Me">
                  <AiFillPhone
                    style={{ color: "white", fontSize: "30px" }}
                    onClick={() => {
                      window.open("https://wa.me/+16194968541", "_blank");
                    }}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section3;
