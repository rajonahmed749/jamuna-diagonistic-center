import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
// import Appointment from './Components/Appointment/Appointment/Appointment';
import NoFound from './Components/Home/NoFound/NoFound';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import DoctorDashboard from './Components/Dashboard/DoctorDashboard/DoctorDashboard';
import Patients from './Components/Dashboard/Patients/Patients';



export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/doctor/dashboard">
            <DoctorDashboard/>
          </Route>
          <Route  path="/doctor/patients">
            <Patients/>
          </Route>
          <Route path="/blog">
            <NoFound/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <NoFound/>
          </Route>
        </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
