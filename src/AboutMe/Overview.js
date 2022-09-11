import React, { Component } from 'react';
import { MdBadge, MdCastForEducation } from "react-icons/md";
import sjsu from "./../images/logo-sjsu.svg";
import tcs from "./../images/tcs1.png";
import { AiFillApple } from "react-icons/ai";
import agi from "./../images/agiLogo.png";



import "./Overview.css";
class Overview extends Component {
    state = {  } 
    render() { 
        return (<div className="container-fluid overview">
            <div className="row">
            
                <div className="col-sm" style={{display:'inline-block'}}>
                
                    <img src={sjsu} className="exp-box-img" style={{display:'inline',paddingLeft:'0px'}}></img>
                    <h6>2022-Till Date</h6>
                    <div className="row">
                      <div className="col-sm" style={{paddingLeft:"30px"}}>
                        <p>Teaching Assistant </p>
                        <p>Master's in Software Engineering</p> 
                      </div>

                    </div>
                
                </div>
              </div>
             <div className="row">
              <div className='col-sm' style={{display:'inline-block'}}>
              <AiFillApple fontSize={"50px"} style={{ paddingLeft: "0px" }} />
                    <h6>2020-2021</h6>
                    <div className="row">
                      <div className="col-sm" style={{paddingLeft:"30px"}}>
                        <p>Software Engineering Contractor</p>
                        <p></p> 
                      </div>

                    </div>
              </div>
              </div>

              <div className="row">
              <div className='col-sm' style={{display:'inline-block'}}>
              <img src={agi} className="exp-box-img" style={{display:'inline',paddingLeft:'0px'}}></img>
                    <h6>2016-2020</h6>
                    <div className="row">
                      <div className="col-sm" style={{paddingLeft:"30px"}}>
                        <p>Bachelor's in Information Technology</p>
                        <p></p> 
                      </div>

                    </div>
              </div>
              </div>
            
        </div>);
    }
}
 
export default Overview;