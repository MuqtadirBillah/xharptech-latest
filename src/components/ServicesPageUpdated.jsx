import React from "react";
import {Helmet} from "react-helmet";
import Navigation from "./Navigation";
import ServicesHero from "./ServicesHero";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";

function ServicesPageUpdated(){

    var imageBackStyle = {
        // backgroundImage: `url("/assets/images/service-back.png")`,
        // backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat'
    }

    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Services - Xharptech | Design & Development</title>
                <meta name="keywords" content="web design, mobile app development, software development, user experience design, application development, custom web development, user friendly" />
                <meta name="description" content="We are a full-service design and development agency. We offer everything from UI/UX and Web Development to E-Commerce and Mobile applications. Get A Quote Now" />
            </Helmet>
            <Navigation />
            <div className="servicesPageUpdated">
                <ServicesHero />
                <div className="mainContent container">
                    <h2 className="updatedSectionMainHeading">Our Services</h2>
                    <h1>We Take Pride in Designing<br />Extraordinary Products for you</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime consequuntur optio ut blanditiis esse ratione, at,<br />ipsa nulla quia eius laborum nostrum inventore id.</p>
                    <div className="services">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" style={imageBackStyle}>
                                <img src="/assets/images/service-webdesign.png" alt='web-design-image' />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>WEBSITE DESIGN</h2>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus iure eius laborum ea ex atque cum optio minima ducimus?</h5>
                                    <ul>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>MOBILE DESIGN</h2>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus iure eius laborum ea ex atque cum optio minima ducimus?</h5>
                                    <ul>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" style={imageBackStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >
                                <img src="/assets/images/service-appdesign.png" alt='web-design-image' />
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" style={imageBackStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >
                                <img src="/assets/images/service-development.png" alt='web-design-image' />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>DEVELOPMENT</h2>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus iure eius laborum ea ex atque cum optio minima ducimus?</h5>
                                    <ul>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>BRANDING DESIGN</h2>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus iure eius laborum ea ex atque cum optio minima ducimus?</h5>
                                    <ul>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" style={imageBackStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >
                                <img src="/assets/images/service-branding.png" alt='web-design-image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactEmail />
            <Footer />
        </>
    );
}

export default ServicesPageUpdated;
