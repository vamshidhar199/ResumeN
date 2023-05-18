import React, { Component } from "react";
import { Spring, animated } from "react-spring";

class Section1 extends Component {
  state = {};
  render() {
    return (
      <>
        <section className="section1">
          <div className="NameSection">
            <div className="NameSection-styled NameSection-styledMob">
              <ul className="ul-name">
                <li>
                  <Spring
                    from={{ opacity: 0, y: -30 }}
                    to={{ opacity: 1, y: 10 }}
                    delay={200}
                  >
                    {(props) => (
                      <animated.div style={props}>
                        {" "}
                        <span className="font-style">
                          Parupally Vamshidhar Reddy
                        </span>
                      </animated.div>
                    )}
                  </Spring>

                  <div className="designation">
                    <Spring
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      delay={400}
                    >
                      {(props) => (
                        <animated.div style={props}>
                          {" "}
                          Master's Student at SJSU
                          <br></br>| Ex Software Developer at TCS
                          <br></br>| Worked for Apple Sales Unit
                        </animated.div>
                      )}
                    </Spring>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Section1;
