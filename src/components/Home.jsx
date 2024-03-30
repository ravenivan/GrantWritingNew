import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleDown, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from '../assets/Logo-clear.png'
import Blob from './ui/Blob';
import Client1 from '../assets/Home-client1.png';
import Client2 from '../assets/Home-client2.jpg';
import Client3 from '../assets/Home-client3.png';
import Client4 from '../assets/Home-client4.png';

const Home = () => {
    return (
        <section id="home">
            <Blob className="blob-header" />
            <div className="container">
                <div className="row home__row">
                    <div className="home__main-content">
                        <div className="home__content">
                            <h2 className="home__content__subtitle">
                                Learn how to write grants
                            </h2>
                            <h1 className="home__content__title">
                                Securing Funding to Move Your Mission Forward.
                            </h1>
                            <p className="home__content__para">
                                Teaching grant writing success in small dosage! Understand the common mistakes and challenges. Get funding and so much more.
                            </p>
                            <div className="home__content__btns">
                                <a href="">
                                    <button className="home__content__btn home__content__sign-up">
                                        Sign up
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </button>
                                </a>
                                <a href="#about">
                                    <button className="home__content__btn home__content__learn">
                                        Learn More
                                        <FontAwesomeIcon icon={faAngleRight} className="home__content__learn__icon" />
                                    </button>
                                </a>
                            </div>

                        </div>
                        <div className="home__img__wrapper">
                            <img src={Logo} alt="" className="home__img" />
                        </div>
                    </div>
                    <div className="home__partners">
                        <h4 className="home__partners__title">
                            Some of our clients
                        </h4>
                        <div className="home__partners__list">
                            <div className="home__partner">
                                <img src={Client1} alt="" className="home__partner__img" />
                            </div>
                            <div className="home__partner">
                                <img src={Client2} alt="" className="home__partner__img" />
                            </div>
                            <div className="home__partner">
                                <img src={Client3} alt="" className="home__partner__img" />
                            </div>
                            <div className="home__partner">
                                <img src={Client4} alt="" className="home__partner__img" />
                            </div>
                        </div>
                    </div>
                    <a href="#about" className="home__scroll">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
