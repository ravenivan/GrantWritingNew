import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Service from './ui/Service';
import Icon1 from '../assets/Services1.png';
import Icon2 from '../assets/Services2.png';
import Icon3 from '../assets/Services3.png';
import Icon4 from '../assets/Services4.png';
import Icon5 from '../assets/Services5.png';

const Services = () => {
    return (
        <section id="services">
            <div className="container services__container">
                <div className="row services__row">
                    <h5 className="services__subtitle">
                        We Offer
                    </h5>
                    <h2 className="services__title">
                        Core Grant Writing Services Offered:
                    </h2>
                    <div className="services__services">
                        <Service
                            icon={Icon1}
                            step="1"
                            title="Grant Proposal Development and Writing"
                            para="This core service encompasses crafting a compelling proposal that adheres
                        to the funder&#39;s guidelines."
                        />
                        <Service
                            icon={Icon2}
                            step="2"
                            title="Budget Development and Justification"
                            para="Grant Writing Essentials team will assist you in crafting a detailed budget
                            that allocates grant funds effectively and provides clear justifications for
                            each expense category."
                        />
                        <Service
                            icon={Icon3}
                            step="3"
                            title="Editing and Proofreading"
                            para="A professional polish is crucial. Grant Writing Essentials team will
                            meticulously edit and proofread your proposal to ensure it is error-free,
                            grammatically sound, and conveys your message effectively."
                        />
                        <Service
                            icon={Icon4}
                            step="4"
                            title="Grant Readiness Assessment"
                            para="Grant Writing Essentials team will evaluate your organization&#39;s mission,
                            track record, and internal capacity for managing grant-funded projects to
                            identify areas for improvement."
                        />
                        <Service
                            icon={Icon5}
                            step="5"
                            title="Pre- and Post-Submission Support"
                            para="This service includes guidance on pre-submission inquiries with funders
                            and follow-up support after your proposal is submitted."
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
