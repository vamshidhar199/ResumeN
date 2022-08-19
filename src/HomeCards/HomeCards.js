import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class HomeCards extends Component {
  state = {};
  render() {
    return (
      <Card
        sx={{ minWidth: 275 }}
        style={{
          backgroundColor: "#879598  !important",
          opacity: "0.8",
          background:
            "linear-gradient( 90deg, rgba(116, 117, 119, 0.96) 0%, rgba(33, 37, 41, 0.4) 100% )",
          padding: "5px",
        }}
      >
        <CardContent style={{ backgroundColor: "#879598 " }}>
          <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
            {this.props.projectname}
          </Typography>
          <p
            style={{ textAlign: "justify", color: "black", fontWeight: "500" }}
          >
            {this.props.description}
          </p>
        </CardContent>
        <CardActions>
          <Button style={{ color: "white" }} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default HomeCards;
