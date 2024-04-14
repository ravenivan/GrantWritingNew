import React from 'react';
import Testimonial1 from '../assets/Testimonial1.png';
import Testimonial2 from '../assets/Testimonial2.png';
import Testimonial3 from '../assets/Testimonial3.jpg';
import Testimonial4 from '../assets/Testimonial4.png';
import Testimonial5 from '../assets/Testimonial5.png';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <div className="row testimonials__row">
                    <h3 className="testimonials__subtitle">
                        Testimonials
                    </h3>
                    <h1 className="testimonials__title">
                        Hear what our clients have to say about us
                    </h1>
                    <div className="testimonials__testimonials__wrapper">
                        <div className="testimonials__testimonials">
                            <img src={Testimonial1} alt="" id="testimonial-1" />
                            <img src={Testimonial2} alt="" id="testimonial-2" />
                            <img src={Testimonial3} alt="" id="testimonial-3" />
                            <img src={Testimonial4} alt="" id="testimonial-4" />
                            <img src={Testimonial5} alt="" id="testimonial-5" />
                        </div>
                        <div className="testimonials__testimonials-nav">
                            <a href="#testimonial-1"></a>
                            <a href="#testimonial-2"></a>
                            <a href="#testimonial-3"></a>
                            <a href="#testimonial-4"></a>
                            <a href="#testimonial-5"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
