import React from 'react';
import DifferentImg from '../assets/Series1.jpg';
import Pattern from '../assets/pattern-1.png'

const Different = () => {
    return (
        <section id="different">
            <div className="container">
                <div className="row different__row">
                    <div className="different__content">
                        <h5 className="different__subtitle">
                            We Empower You!
                        </h5>
                        <h3 className="different__title">
                            What Makes Us Different?
                        </h3>
                        <p className="different__para">
                            While many grant writing services simply write proposals for you, we take a different
                            approach. Our lead grant writer is a seasoned professional who understands the
                            intricacies of crafting winning proposals. We go beyond writing – we educate!
                        </p>
                        <div className="different__para">

                            We demystify the grant writing process, empowering you to navigate the steps with
                            confidence. Our goal is to equip you with the knowledge and skills to write strong grant
                            proposals, not just for this specific grant, but for future endeavors as well.
                        </div>
                        <a href="https://form.jotform.com/mrslawson/business-essentials_registration" target="_blank" className="about__btn__wrapper">
                            <button className="different__btn">Start now</button>
                        </a>
                    </div>
                    <div className="different__img__wrapper">
                        <img src={DifferentImg} alt="" className="different__img" />
                        <div className="different__img__wrapper__pattern__wrapper">
                            <img src={Pattern} alt="" className="different__img__wrapper__pattern" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Different;
