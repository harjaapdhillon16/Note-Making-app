import React from "react";
import styled from "styled-components";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1564216329574-c839d4eedb1b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=dennis-brendel-cCRyDcdQYas-unsplash.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  align-self: center;
  width: 100%;
  height: 100vh;
`;
const Heading = styled.h1`
  margin: 0px;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin-bottom: 5rem;
`;
const Heading2 = styled(Heading)`
  font-size: 40px;
  margin-bottom: 0rem;
`;

const App = (props) => {
  return (
    <Container>
      <Grid container alignItems="center" justify="center" >
        <Grid item xs={10}>
          <Heading>The Note Taking App</Heading>
        </Grid>
        <Grid  style={{ backgroundColor:'#000',borderRadius:'20px',margin:'1rem',padding:'0.5rem' }}  item xs={12} sm={3}>
          <Grid spacing={2} container alignItems="center" justify="center">
            <Grid item>
              <Heading2>Student</Heading2>
            </Grid>
            <Grid item>
                <Button onClick={()=>props.history.push('/student')} variant="contained" color="secondary">
                  Student Page
                </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ backgroundColor:'#000',borderRadius:'20px',padding:'0.5rem',margin:'1rem' }} item xs={12} sm={3}>
          <Grid spacing={2} container alignItems="center" justify="center">
            <Grid item>
              <Heading2>Teacher</Heading2>
            </Grid>
              <Grid item>
                <Button onClick={()=>props.history.push('/teacher')} variant="contained" color="secondary">
                  Teacher Page
                </Button>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
