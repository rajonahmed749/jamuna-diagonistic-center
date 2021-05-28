import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../../images/diagonistic.png'

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>WE CARE <br/> YOUR HEALTH</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam, quidem vel ullam perspiciatis in?</p>
               <Link to='/appointment'> <button className="btn button">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={picture} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;