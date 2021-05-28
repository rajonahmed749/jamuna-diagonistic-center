import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCards.css'

const InfoCards = ({info}) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-between info-container info-${info.background}`}>
                <div className="ms-3">
                <FontAwesomeIcon className="info-icon" icon={info.icon} />                    
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;