import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctor2 from "../../../images/doctor-2.jpg"
import doctor3 from "../../../images/doctor-3.jpg";
import doctor5 from "../../../images/doctor-5.jpg"

const Doctors = () => {
    return (
        <div className="mt-5">
            <div className="mt-5 text-center">
                <h5 className="text-brand text-uppercase">our doctor</h5>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3 text-center">
                    <img src={doctor5} alt="doctor" className="doctorImg img-fluid mb-3"/>
                    <h5 className="">Dr. Shireen Sharmin</h5>
                    <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-177-5655564</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={doctor2} alt="doctor" className="doctorImg img-fluid mb-3"/>
                    <h5 className="">Dr. Nishat Prome </h5>
                    <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-177-5655564</p>
                </div>
                <div className="col-md-3 text-center">
                     <img src={doctor3} alt="doctor" className="doctorImg img-fluid mb-3"/>
                    <h5 className="">Dr. William Albert </h5>
                    <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-177-5655564</p>
                </div>
            </div>
            
        </div>
    );
};

export default Doctors;