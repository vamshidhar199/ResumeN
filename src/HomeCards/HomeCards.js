import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogBox from "./DialogBox";
class HomeCards extends Component {
  state = {
    showFullDesription: false,
    showPopUp: false,
  };

  togglePopUp = () => {
    // this.setState({ showFullDesription: !this.state.showFullDesription });
  };
  openDialog = () => {
    this.setState({ showFullDescription: true });
  };
  toggleShowFullDescription = () => {
    console.log("call this");
    this.setState({ showFullDescription: false });
    console.log(this.state.showFullDesription);
  };

  render() {
    const MAX_LENGTH = 200;
    return (
      <Card
        sx={{ minWidth: 275 }}
        style={{
          backgroundColor: "#879598  !important",
          opacity: "0.8",
          //   background:
          //     "linear-gradient( 90deg, rgba(116, 117, 119, 0.96) 0%, rgba(33, 37, 41, 0.4) 100% )",
          //   padding: "5px",
        }}
      >
        <CardContent style={{ backgroundColor: "#879598 " }}>
          <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
            {this.props.projectname}
          </Typography>
          {/* <p
            style={{ textAlign: "justify", color: "black", fontWeight: "500" }}
          >
            {this.showFullDesription
              ? this.props.description
              : this.props.description.slice(0, MAX_LENGTH) &&
                this.props.description.length > MAX_LENGTH &&
                "... "}
            {}
          </p> */}

          {this.state.showFullDescription ? (
            <p>
              <DialogBox
                onClose={this.togglePopUp}
                description={this.props.description}
                title={this.props.projectname}
                toggleShowFullDescription={this.toggleShowFullDescription}
              />

              {this.props.description.slice(0, MAX_LENGTH)}
              {this.props.description.length > MAX_LENGTH && "... "}
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={this.openDialog}
              >
                (read more)
              </span>
            </p>
          ) : (
            <p>
              {this.props.description.slice(0, MAX_LENGTH)}
              {this.props.description.length > MAX_LENGTH && "... "}
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={this.openDialog}
              >
                (read more)
              </span>
            </p>
          )}
        </CardContent>
        <CardActions>
          <Button
            style={{ color: this.props.link != "" ? "black" : "white" }}
            size="small"
            onClick={(e) => {
              window.location.href = this.props.link;
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default HomeCards;
