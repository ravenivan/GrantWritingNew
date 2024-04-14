import { faClipboardList, faHandHoldingDollar, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Series1 from '../assets/Series1.jpg';
import Series2 from '../assets/Series2.jpg';
import Series3 from '../assets/Series3.jpg';
import Blob from './ui/Blob';

const SeriesBanner = () => {
    return (
        <section id="series">
            <Blob className="blob-series" />
            <Blob className="blob-series2" />
            <div className="container series__container">
                <div className="row series__row">
                    <div className="series__header">
                        <h3 className="series__header__title">
                            Demystifying the Grant Writing Process: A 3-Part Workshop Series
                        </h3>
                        <p className="series__header__para">
                            Grant Writing Essentials offers a comprehensive 3-part workshop series designed to
                            demystify the grant writing process and empower you to write winning proposals.
                        </p>
                    </div>
                    <div className="series__parts">
                        <div className="series__part">
                            <div className="series__part__img__wrapper">
                                <img src={Series1} alt="" className="series__part__img" />
                            </div>
                            <div className="series__part__content">
                                <h4 className="series__part__title">
                                    Foundation & Opportunity Identification
                                </h4>
                                <p className="series__part__para">
                                    Learn how to identify ideal
                                    grant opportunities that align with your mission and project goals. We&#39;ll delve into
                                    research strategies, explore funding landscapes, and equip you with the tools to
                                    find the perfect grants to pursue.
                                </p>
                            </div>

                        </div>
                        <div className="series__part">
                            <div className="series__part__img__wrapper">
                                <img src={Series2} alt="" className="series__part__img" />
                            </div>
                            <div className="series__part__content">
                                <h4 className="series__part__title">
                                    Crafting a Compelling Proposal
                                </h4>
                                <p className="series__part__para">
                                    Master the art of writing persuasive
                                    and well-structured proposals. This session will guide you through developing a

                                    powerful narrative, crafting clear objectives, and creating a budget that
                                    demonstrates financial responsibility.
                                </p>
                            </div>

                        </div>
                        <div className="series__part">
                            <div className="series__part__img__wrapper">
                                <img src={Series3} alt="" className="series__part__img" />
                            </div>
                            <div className="series__part__content">
                                <h4 className="series__part__title">
                                    The Art of the Ask &amp; Beyond
                                </h4>
                                <p className="series__part__para">
                                    Learn how to confidently present your
                                    proposal and navigate the post-submission process. We&#39;ll cover effective
                                    communication strategies for grantors, best practices for follow-up, and essential
                                    tips for maximizing your chances of success.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// const SeriesBanner = () => {
//     return (
//         <section id="series">
//             <Blob className="blob-series" />
//             <Blob className="blob-series2" />
//             <div className="container series__container">
//                 <div className="row series__row">
//                     <div className="series__header">
//                         <h3 className="series__header__title">
//                             Demystifying the Grant Writing Process: A 3-Part Workshop Series
//                         </h3>
//                         <p className="series__header__para">
//                             Grant Writing Essentials offers a comprehensive 3-part workshop series designed to
//                             demystify the grant writing process and empower you to write winning proposals.
//                         </p>
//                     </div>
//                     <div className="series__parts">
//                         <div className="series__part">
//                             <div className="series__part__content">
//                                 <FontAwesomeIcon icon={faClipboardList} className="series__part__icon" />
//                                 <h4 className="series__part__title">
//                                     <span className="black-color">Part 1:</span> <br />Foundation & Opportunity Identification
//                                 </h4>
//                                 <p className="series__part__para">
//                                     Learn how to identify ideal
//                                     grant opportunities that align with your mission and project goals. We&#39;ll delve into
//                                     research strategies, explore funding landscapes, and equip you with the tools to
//                                     find the perfect grants to pursue.
//                                 </p>
//                             </div>
//                             <div className="series__part__img__wrapper">
//                                 <img src={Series1} alt="" className="series__part__img" />
//                             </div>
//                         </div>
//                         <div className="series__part reverse">
//                             <div className="series__part__content">
//                                 <FontAwesomeIcon icon={faPenToSquare} className="series__part__icon" />
//                                 <h4 className="series__part__title">
//                                     <span className="black-color">Part 2:</span> <br />Crafting a Compelling Proposal
//                                 </h4>
//                                 <p className="series__part__para">
//                                     Master the art of writing persuasive
//                                     and well-structured proposals. This session will guide you through developing a

//                                     powerful narrative, crafting clear objectives, and creating a budget that
//                                     demonstrates financial responsibility.
//                                 </p>
//                             </div>
//                             <div className="series__part__img__wrapper">
//                                 <img src={Series2} alt="" className="series__part__img" />
//                             </div>
//                         </div>
//                         <div className="series__part">
//                             <div className="series__part__content">
//                                 <FontAwesomeIcon icon={faHandHoldingDollar} className="series__part__icon" />
//                                 <h4 className="series__part__title">
//                                     <span className="black-color">Part 3:</span> <br /> The Art of the Ask &amp; Beyond
//                                 </h4>
//                                 <p className="series__part__para">
//                                     Learn how to confidently present your
//                                     proposal and navigate the post-submission process. We&#39;ll cover effective
//                                     communication strategies for grantors, best practices for follow-up, and essential
//                                     tips for maximizing your chances of success.
//                                 </p>
//                             </div>
//                             <div className="series__part__img__wrapper">
//                                 <img src={Series3} alt="" className="series__part__img" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

export default SeriesBanner;
