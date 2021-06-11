import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const PatientsTable = ({allPatients}) => {
    let srNo = 1;
    return (
        <section className=" ms-5">
            <div className="row justify-content-between mb-3">
                <div className="col-md-2">
                    <h5 className="text-brand">All Patients</h5>
                </div>
                <div className="col-md-2">
                    <span className="border border-info p-1"><FontAwesomeIcon className="icon"icon={faCalendarAlt}/> Week</span>                    
                </div>
            </div>        
            <table className="table table-borderless">
                <thead>
                    <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Gender</th>
                    <th className="text-secondary" scope="col">Age</th>
                    <th className="text-secondary" scope="col">Weight</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    allPatients.map(patient => 
                            
                        <tr>
                            <td>{srNo++}</td>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.weight}kg</td>
                            <td>{patient.phone}</td>
                            <td>{patient.email}</td>
                        </tr>
                        )
                    }
                
                    
                </tbody>
            </table>
        </section>
    );
};

export default PatientsTable;