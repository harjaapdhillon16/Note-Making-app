import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Button, Paper, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Heading3 = styled.h1`
  font-size: 20px;
  font-weight: regular;
  font-family: Roboto, sans-serif;
  text-align: center;
`;

export default class ShowStudentData extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                  {this.props.students.map((details, i) => {
                const Index = i;
                return (
                  < >
                    <Grid
                      key={Index}
                      style={{
                        border: "1px solid #000",
                        padding: "0.3rem",
                        margin: "0.5rem",
                        borderRadius: "20px",
                      }}
                      item
                      xs={12}
                      sm={12}
                    >
                      <Grid container key={Index}>
                        <Grid item key={Index}>
                          <EditIcon onClick={()=>this.props.edit(i)} key={Index} style={{ fontSize: "40px" }} />
                        </Grid>
                        <Grid
                          style={{ padding: "0.5rem" }}
                          item
                          xs={12}
                          sm={11}
                        >
                          <Paper variant="outlined">
                            <Heading3>
                              {" "}
                              {details.Name} Class {details.Class}
                            </Heading3>
                            <Heading3>
                              {" "}
                              RollNo {details.RollNo} Section {details.Section}
                              {"     "}
                            </Heading3>
                          </Paper>
                        </Grid>
                        <Grid item>
                          <DeleteIcon
                            onClick={() => this.props.delete(Index)}
                            style={{ fontSize: "40px" }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
            </div>
        )
    }
}
