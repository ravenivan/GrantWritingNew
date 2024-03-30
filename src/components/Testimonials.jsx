import React from 'react';
import Testimonial from '../assets/Testimonial.jpg'

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <div className="row">
                    <img src={Testimonial} alt="" className="testimonial__img" />
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
