import React, { Component } from "react";
import { Grid, Button, Paper, TextField } from "@material-ui/core";

export default class EditTeacher extends Component {
  constructor(props) {
    super(props);
    const Data = this.props.data;
    this.state = {
      name: Data.Name,
      TeacherID: Data.TeacherID,
      Classes: Data.Classes,
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
          <form autoComplete="off" noValidate>
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
                  value={this.state.TeacherID}
                  onChange={(e) => {
                    this.setState({ TeacherID: e.target.value });
                  }}
                  label="TeacherID"
                  variant="outlined"
                />
              </Grid>
              <Grid item style={{ margin: "0.4rem" }} xs={12} sm={10}>
                <TextField
                  style={{ width: "70%" }}
                  value={this.state.Classes}
                  onChange={(e) => {
                    this.setState({ Classes: e.target.value });
                  }}
                  id="outlined-basic"
                  label="Classes"
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
                    this.props.ChangeValue(
                      this.props.index,
                      this.state.name,
                      this.state.TeacherID,
                      this.state.Classes,
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
