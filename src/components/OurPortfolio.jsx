import React from "react";

function OurPortfolio(){
    return(
        <div className="ourPortfolio">
            <div className="container">
                <div className="row">            
                    <div className="row ourHeading">
                        <div className="col-lg-12 col-md-12 col-sm-12 align-self-center ourLeft" data-aos="slide-down" data-aos-delay="100" data-aos-duration="600">
                            <h2 className="updatedSectionMainHeading" data-aos="slide-down" data-aos-delay="100" data-aos-duration="600">Our Portfolio</h2>
                            <h1>Our Recent works</h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 align-self-center ourRight" data-aos="slide-down" data-aos-delay="100" data-aos-duration="600">
                            <button>VIEW ALL</button>
                        </div>
                    </div>
                    <div className="tiless">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="flip-right" data-aos-delay="100" data-aos-duration="600">
                                <div>
                                    <img src="/assets/images/port.png" alt="" />
                                    <div className="content">
                                        <h3>APP DESIGN</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid laborum odio voluptatibus iste? Neque repudiandae animi nobis perspiciatis ipsam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600">
                                <div>
                                    <img src="/assets/images/portland.png" alt="" />
                                    <div className="content">
                                        <h3>BRANDING LOGO</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?</p>
                                    </div>
                                    <img src="/assets/images/portland.png" alt="" />
                                    <div className="content">
                                        <h3>BRANDING LOGO</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="flip-right" data-aos-delay="100" data-aos-duration="600">
                                <div>
                                    <img src="/assets/images/port.png" alt="" />
                                    <div className="content">
                                        <h3>BRANDING LOGO</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid laborum odio voluptatibus iste? Neque repudiandae animi nobis perspiciatis ipsam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurPortfolio;