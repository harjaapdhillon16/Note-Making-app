import React from "react";
import styled from "styled-components";

import { Grid, Button, Paper, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ShowTeacherData from './Components/ShowTeacherData';
import EditStudent from './Components/EditStudent';
import AddTeacher from './Components/AddTeacher';

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
    Name: "Sunitika ",
    TeacherID: "w132",
    Classes: '9 10' 
  },
  {
    Name: "Lalit",
    TeacherID: "w13",
    Classes:'12 11' 
  },
];

 export default class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: Data,
      editTeacherHtml:null,
      addTeacherHtml:null
    };
    this.Delete = this.Delete.bind(this);
    this.showTeacherDataHtml  = this.showTeacherDataHtml.bind(this)
    this.ChangeValues = this.ChangeValues.bind(this)
    this.showAddTeacherHtml = this.showAddTeacherHtml.bind(this)
    this.AddValue = this.AddValue.bind(this)
  }
  Delete(i) {
    const NewList = this.state.teacher;
    NewList.splice(i, 1);
    this.setState({ teacher: NewList });
    console.log("students ", this.state.students);
    return true;
  }
  ChangeValues(i,name,TeacherID,Classes){
   const NewData = {
     Name:name,
     TeacherID:TeacherID,
     Classes:Classes,
   };
   const TeacherData = this.state.teacher;
   TeacherData[i]  = NewData;
   this.setState({teacher:TeacherData})
   this.setState({editTeacherHtml:null})
  }
  AddValue(name,TeacherID,Classes){
    const NewData = {
      Name:name,
      TeacherID:TeacherID,
      Classes:Classes,
      
    };
    const TeacherData = this.state.teacher;
    TeacherData.push(NewData)
    this.setState({teacher:TeacherData})
    this.setState({addTeacherHtml:null})
   }
  showAddTeacherHtml(){
    this.setState({addTeacherHtml:<AddTeacher AddValue={this.AddValue} />})

  }
  showTeacherDataHtml(i){
    this.setState({editTeacherHtml:<EditStudent ChangeValue={this.ChangeValues} data={this.state.teacher[i]} index={i}/>})
  }
  render() {
    return (
      <Container>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={10}>
            <Heading>The Note Taking Teacher</Heading>
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
                onClick={()=>this.showAddTeacherHtml()}
                  variant="contained"
                  color="default"
                  style={{ margin: "1rem" }}
                  startIcon={
                    <AddIcon style={{ height: "30px", width: "30px" }} />
                  }
                >
                  Add A Teacher
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Heading2> Teacher List</Heading2>
              </Grid>
            <ShowTeacherData edit={this.showTeacherDataHtml} delete={this.Delete} teacher={this.state.teacher} />
            </Grid>
          </Grid>
        </Grid>
        {/* edit a student */}
        {this.state.editTeacherHtml}
        {/* add a student */}
        {this.state.addTeacherHtml}
      </Container>
    );
  }
}

