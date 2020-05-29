import React from "react";
import styled from "styled-components";

import { Grid, Button, Paper, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ShowStudentData from './Components/ShowStudentData';
import EditStudent from './Components/EditStudent';
import AddStudent from './Components/AddStudents';

const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1564216329574-c839d4eedb1b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=dennis-brendel-cCRyDcdQYas-unsplash.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #000;
  align-self: center;
  width: 100%;
  min-height: 100vh;
`;
const Heading = styled.h1`
  margin: 0px;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin-bottom: 2rem;
`;
const Heading2 = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0rem;
  color: #000;
`;
const Heading3 = styled(Heading2)`
  font-size: 20px;
  font-weight: regular;
`;

const Data = [
  {
    Name: "Harjaap",
    RollNo: 1,
    Class: 12,
    Section: "E",
  },
  {
    Name: "Abhi",
    RollNo: 2,
    Class: 10,
    Section: "C",
  },
];

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: Data,
      editStudentHtml:null,
      addStudentHtml:null
    };
    this.Delete = this.Delete.bind(this);
    this.showEditStudentHtml  = this.showEditStudentHtml.bind(this)
    this.ChangeValues = this.ChangeValues.bind(this)
    this.showAddStudentHtml = this.showAddStudentHtml.bind(this)
  }
  Delete(i) {
    const NewList = this.state.students;
    NewList.splice(i, 1);
    this.setState({ students: NewList });
    console.log("students ", this.state.students);
    return true;
  }
  ChangeValues(i,name,classNo,roll,section){
   const NewData = {
     Name:name,
     Class:classNo,
     RollNo:roll,
     Section:section
   };
   const StudentsData = this.state.students;
   StudentsData[i]  = NewData;
   this.setState({students:StudentsData})
   this.setState({editStudentHtml:null})
  }
  ChangeValues(name,classNo,roll,section){
    const NewData = {
      Name:name,
      Class:classNo,
      RollNo:roll,
      Section:section
    };
    const StudentsData = this.state.students;
    StudentsData.push(NewData)
    this.setState({students:StudentsData})
    this.setState({addStudentHtml:null})
   }
  showAddStudentHtml(){
    this.setState({addStudentHtml:<AddStudent AddValue={this.AddValue} />})

  }
  showEditStudentHtml(i){
    this.setState({editStudentHtml:<EditStudent ChangeValue={this.ChangeValues} data={this.state.students[i]} index={i}/>})
  }
  render() {
    return (
      <Container>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={10}>
            <Heading>The Note Taking Student</Heading>
          </Grid>
          <Grid
            style={{ backgroundColor: "white", borderRadius: "20px" }}
            item
            xs={12}
            xs={10}
          >
            <Grid container alignItems="center" justify="center">
              <Grid item>
                <Button
                onClick={()=>this.showAddStudentHtml()}
                  variant="contained"
                  color="default"
                  style={{ margin: "1rem" }}
                  startIcon={
                    <AddIcon style={{ height: "30px", width: "30px" }} />
                  }
                >
                  Add A student
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Heading2> Student List</Heading2>
              </Grid>
            <ShowStudentData edit={this.showEditStudentHtml} delete={this.Delete} students={this.state.students} />
            </Grid>
          </Grid>
        </Grid>
        {/* edit a student */}
        {this.state.editStudentHtml}
        {/* add a student */}
        {this.state.addStudentHtml}
      </Container>
    );
  }
}

export default Student;
