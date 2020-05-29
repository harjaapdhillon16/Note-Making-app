  
import React from "react";
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';

import Home from './Pages/Home';
import Students from './Pages/Students';
import Teacher from './Pages/Teacher';
import Student from "./Pages/Students";


const App = ()=>{
  return(
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/student" exact component={Student}/>
      <Route path="/teacher" exact component={Teacher}/>

      </Switch>
    </Router>
  )
}



export default App;