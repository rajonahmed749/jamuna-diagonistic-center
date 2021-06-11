import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import PatientsTable from './PatientsTable';
// import DataTable from '../../Components/DataTables/DataTable';
// import PatientsDataTable from '../../Components/DataTables/PatientsDataTable';

const Patients = () => {

    const [allPatients, setAllPatients] = useState([])

    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height:"100%"
    }

    useEffect( () => {
        fetch("http://localhost:4000/allAppointments")
        .then(res => res.json())
        .then(data => setAllPatients(data))
    },[])


    console.log("all patients", allPatients);


    return (
        <section>
            <div>
                <Navbar/>
            </div>
            <div style={containerStyle} className="container-fluid row mt-5">
                <div className="col-md-2 mt-5">
                    <Sidebar/>
                </div>
                <div className="col-md-8  mt-5">
                    <PatientsTable allPatients={allPatients}></PatientsTable>
                </div>
               
            </div>
        </section>
    );
};

export default Patients;