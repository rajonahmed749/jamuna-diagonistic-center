import React from 'react';
import InfoCards from '../InfoCards/InfoCards';

// import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const BussinessInfo = () => {
    const infosData = [
        {
            title: "Opening Hours",
            description: "we are open 7 days ",
            // icon: faClock,
            background: "primary"
        },
        {
            title: "Visit Our Location",
            description: "Boorklyn, NY 1003 USA",
            // icon: faMapMarker,
            background: "dark"
        },
        {
            title: "Call Us Now",
            description: "+3564785643",
            // icon: faPhone,
            background: "primary"
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCards info={info}></InfoCards>)
                }

            </div>
        </section>
    );
};

export default BussinessInfo;