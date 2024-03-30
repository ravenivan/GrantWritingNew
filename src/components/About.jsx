import React from 'react';
import Logo from '../assets/Logo-clear.png'
import MissionImg from '../assets/Mission.jpg'

import Blob from './ui/Blob';

const About = () => {
    return (
        <section id="about">
            {/* <Blob className="blob-about" /> */}
            <div className="container about__container">
                <div className="row about__row">
                    <div className="about__content">
                        <div className="about__who">
                            <h2 className="about__who__title">
                                Our Mission
                            </h2>
                            <p className="about__who__para">
                                Grant Writing Essentials is dedicated to unlocking the potential of impactful
                                initiatives by providing professional grant writing services and accessible
                                educational tools. We equip individuals and organizations with the
                                knowledge and skills to navigate the grant writing process with confidence,
                                translating their vision into sustainable funding.
                            </p>
                            <a href="https://form.jotform.com/mrslawson/business-essentials_registration" target="_blank" className="about__btn__wrapper">
                                <button className="about__btn">Start now</button>
                            </a>
                        </div>
                        <div className="about__content__img__wrapper">
                            <img src={MissionImg} alt="" className="about__content__img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;