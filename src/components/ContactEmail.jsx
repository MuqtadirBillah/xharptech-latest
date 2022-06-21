import React from "react";

function ContactEmail(){
    return(
        <div className="contactEmail">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 left d-flex align-items-center justify-content-center" data-aos="flip-down" data-aos-delay="100" data-aos-duration="800">
                        <img src="/assets/images/emailUpdated.png" alt="email-icon" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right d-flex align-items-center"  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600">
                        <div>
                            <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">Get in touch!</h1>
                            <h4 data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">Our sales team is ready to help from 9 AM-6 PM OST. Our chat support is available 24/7</h4>
                            <div className="emailInput">
                                <input type="email" placeholder="Email" name="" id="" />
                                <button data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactEmail;