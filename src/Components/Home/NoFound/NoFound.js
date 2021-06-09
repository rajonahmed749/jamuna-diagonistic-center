import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const goBack = () => window.history.back();

const NoFound = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="d-flex align-items-center justify-content-center text-center" style={   {height:"100vh"}}>
                <div>
                    <h1 className="display-1 text-danger">404!</h1>
                    <p className="lead ">Page Not Found</p>
                    <button onClick={goBack} className="btn btn-primary"  to="/"><FontAwesomeIcon className="mr-2" icon={faArrowLeft}/> Go Back </button>
                </div>
            </div>
        </div>
    );
};

export default NoFound;