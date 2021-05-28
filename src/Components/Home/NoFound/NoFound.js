import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const NoFound = () => {
    return (
        <div>
            <div className="">
                <Navbar/>
            </div>
            <div className="text-center mx-auto mt-5">
                <h4 className="mt-5"> <span className="fs-1 text-danger">404!</span></h4>
                <h5>Page is not found</h5>
                <Link to='/'> <button className="btn  btn-outline-info mt-1">Go Back</button></Link>
            </div>
        </div>
    );
};

export default NoFound;