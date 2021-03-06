import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import DashboradStatic from "./DashboradStatic"

const DoctorDashboard = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height:"100%"
    }
    
    return (
        <section>
            <div>
                <Navbar/>
            </div>
            <div style={containerStyle} className="container-fluid row mt-5">
                <div className="col-md-2 mt-5">
                    <Sidebar/>
                </div>
                <div className="col-md-5 d-flex justify-content-center mt-5">
                    <DashboradStatic/>
                </div>
                <div className="col-md-5 mt-5">
                    
                </div>
            </div>
        </section>
    );
};

export default DoctorDashboard;