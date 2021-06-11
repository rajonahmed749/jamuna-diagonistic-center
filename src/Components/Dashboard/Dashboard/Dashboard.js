import React, { useEffect, useState, useContext } from 'react';
// import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);       
    }

    useEffect(() => {
        fetch("http://localhost:4000/appointmentsByDate", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data =>setAppointments(data))

    },[selectedDate])

 
   
    return (
        <section>
            <div>
                <Navbar/>
            </div>
            <div style={containerStyle} className="container-fluid row mt-5">
                <div className="col-md-2 mt-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 d-flex justify-content-center mt-5">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5 mt-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;