import React from 'react';

const AppointmentShortList = ({appointments}) => {
    
    return (
        <table className="table table-borderless ">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary text-center" scope="col">status</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        {/* <td>{appointment.email}</td> */}
                        <td className="text-center">
                                <select
                                className="btn btn-info text-capitalize">
                                    <option  className="bg-white text-secondary">Not Visited</option>
                                    <option  className="bg-white text-secondary">Visited</option>
                                </select>
                            </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;