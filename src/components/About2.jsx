import React from 'react';
import About2Img from '../assets/MPL5.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Blob from './ui/Blob';

const About2 = () => {
    return (
        <section id="about2">
            <Blob className="blob-about2" />
            <div className="container">
                <div className="row about2__row">
                    <h2 className="about2__title">
                        Grant Writing Expertise
                    </h2>
                    <div className="about2__content">
                        <div className="about2__content__img__wrapper">
                            <img src={About2Img} alt="" className="about2__content__img" />
                        </div>
                        <div className="about2__content__skills">
                            <p className="about2__content__skills__para">
                                Grant Writing Essentials is led by industry veteran, Marlyn Paris-Lawson.
                                With over nine years of combined experience as a grant reviewer, grant
                                writer and grant educator, she possesses a unique blend of talents that go
                                beyond exceptional writing. She is a strategic storyteller, grant research
                                wizard, and a strong champion of your organization&#39;s mission. Her clients
                                include educational institutions, nonprofit organizations and for-profit small
                                businesses. Below is list of the reasons why her clients choose Grant
                                Writing Essentials:
                            </p>
                            <div className="about2__content__skills__list">
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon" />
                                    <p className="about2__content__skill__para">
                                        She has a keen understanding of current funding trends and
                                        alignment with your organization&#39;s goals.
                                    </p>
                                </div>
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon"/>
                                    <p className="about2__content__skill__para">
                                        She possesses the ability to identify grant opportunities that are a
                                        perfect fit for your project&#39;s needs.
                                    </p>
                                </div>
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon"/>
                                    <p className="about2__content__skill__para">
                                        Exceptional writing skills honed to craft clear, concise, and compelling
                                        proposals.
                                    </p>
                                </div>
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon"/>
                                    <p className="about2__content__skill__para">
                                        Expertise in structuring proposals that adhere to specific funder
                                        guidelines and requirements.
                                    </p>
                                </div>
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon"/>
                                    <p className="about2__content__skill__para">
                                        Ability to translate complex information into an engaging narrative
                                        that resonates with reviewers.
                                    </p>
                                </div>
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon"/>
                                    <p className="about2__content__skill__para">
                                        Strong understanding of budgeting principles and cost allocation
                                        strategies.
                                    </p>
                                </div>
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon"/>
                                    <p className="about2__content__skill__para">
                                        Ability to create detailed and realistic budgets that align with your
                                        project&#39;s activities.
                                    </p>
                                </div>
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon"/>
                                    <p className="about2__content__skill__para">
                                        Skilled in crafting clear and compelling justifications for each budget
                                        expense category.
                                    </p>
                                </div>
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon"/>
                                    <p className="about2__content__skill__para">
                                        Skilled in outlining data collection and analysis methods to ensure
                                        accountability and measurable outcomes.
                                    </p>
                                </div>
                                <div className="about2__content__skill">
                                    <FontAwesomeIcon icon={faCircleCheck} className="about2__content__skill__icon"/>
                                    <p className="about2__content__skill__para">
                                        Excellent communication skills to work effectively with internal teams
                                        and external partners.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About2;
