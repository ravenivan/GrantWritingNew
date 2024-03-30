import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = ({ icon, step, title, para }) => {
    return (
        <div className="services__service">
            <div className="service__icon__wrapper">
                <img src={icon} alt="" className="service__icon" />
            </div>
            <h5 className="service__step">
                Step {step}
            </h5>
            <h3 className="service__title">
                {title}
            </h3>
            <p className="service__para">
                {para}
            </p>
        </div>
    );
}

export default Service;
