import React from 'react';
import FooterCol from './FooterCol';
import "./Footer.css"

const Footer = () => {
    const noNamed = [
        {name: "Emergency Dental Care" },
        {name: "Check Up" },
        {name: "Treatment of Personal Diseases" },
        {name: "Tooth Extraction" },
        {name: "Check Up" },
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" ,link: "/"},
        {name: "Yards",link: "/"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care",link: "/"},
        {name: "Check Up"},
        {name: "Treatment of Personal Diseases",link: "/"},
        {name: "Tooth Extraction",link: "/"},
        {name: "Check Up",link: "/"},
        {name: "Check Up",link: "/"},
        {name: "Check Up",link: "/"}
    ]
    const services = [
        {name: "Emergency Dental Care" ,link: "/"},
        {name: "Check Up" },
        {name: "Treatment of Personal Diseases" ,link: "/"},
        {name: "Tooth Extraction" ,link: "/"},
        {name: "Check Up" ,link: "/"},
        {name: "Check Up"  ,link: "/"},
        {name: "Check Up" ,link: "/"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn button">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p> &copy; Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;