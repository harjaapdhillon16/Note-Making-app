import React, { Component } from "react";
import { Grid, Button, Paper, TextField } from "@material-ui/core";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      RollNo: "",
      Class: "",
      Section: "",
    };
  }
  render() {
    return (
      <>
        <Paper
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            opacity: 0.6,
            backgroundColor: "#000",
          }}
        ></Paper>
        <Paper
          style={{
            position: "absolute",
            top: 100,
            width: "80%",
            height: "60%",
            left: "10%",
          }}
        >
          <form noValidate autoComplete="off">
            <Grid container alignItems="center">
              <Grid item style={{ margin: "0.4rem" }} xs={12} sm={10}>
                <TextField
                  style={{ width: "70%" }}
                  id="outlined-basic"
                  label="Name"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item style={{ margin: "0.4rem" }} xs={12} sm={10}>
                <TextField
                  style={{ width: "70%" }}
                  id="outlined-basic"
                  value={this.state.Class}
                  onChange={(e) => {
                    this.setState({ Class: e.target.value });
                  }}
                  label="Class"
                  variant="outlined"
                />
              </Grid>
              <Grid item style={{ margin: "0.4rem" }} xs={12} sm={10}>
                <TextField
                  style={{ width: "70%" }}
                  value={this.state.RollNo}
                  onChange={(e) => {
                    this.setState({ RollNo: e.target.value });
                  }}
                  id="outlined-basic"
                  label="RollNo"
                  variant="outlined"
                />
              </Grid>
              <Grid item style={{ margin: "0.4rem" }} xs={12} sm={10}>
                <TextField
                  style={{ width: "70%" }}
                  id="outlined-basic"
                  value={this.state.Section}
                  onChange={(e) => {
                    this.setState({ Section: e.target.value });
                  }}
                  label="Section"
                  variant="outlined"
                />
              </Grid>
              <Grid item style={{ margin: "0.4rem" }} xs={12} sm={10}>
                <Button
                  style={{ width: "50%", backgroundColor: "#000" }}
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  onClick={() =>
                    this.props.AddValue(
                      this.props.index,
                      this.state.name,
                      this.state.Class,
                      this.state.RollNo,
                      this.state.Section
                    )
                  }
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </>
    );
  }
}
