import React from 'react';
import photo from '../../../images/appointmentBg.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{color:"40485B"}}>Appointment</h1>
            <Calendar
                onChange={handleDateChange}
                value={new Date()}
            />
        </div>
        <div className="col-md-6">
            <img src={photo} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default AppointmentHeader;