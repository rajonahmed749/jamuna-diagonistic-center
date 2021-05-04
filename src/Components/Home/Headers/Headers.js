import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BussinessCards from '../BussinessCards/BussinessCards';
import HeaderMain from '../HeaderMain/HeaderMain';
import "./Headers.css";

const Headers = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeaderMain/>
            <BussinessCards/>
        </div>
    );
};

export default Headers;