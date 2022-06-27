import React from "react";
import {Helmet} from "react-helmet";
import Navigation from "./Navigation";
import AboutHero from "./AboutHero";
import AboutBanner from "./AboutBanner";
import Team from './Team'
import TestimonialsUpdated from "./TestimonialsUpdated";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";

function AboutPage(){
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us | Meet Xharptech</title>
                <meta name="keywords" content="web design and development services, mobile development services, e-commerce development, top-quality results, industry experience" />
                <meta name="description" content="Our team specializes in providing top-quality web design and development, mobile development and e-commerce development services. We have a team of individuals who have exceptional skills through profound industry experience which result in high-quality results delivery." />
            </Helmet>
            <Navigation />
            <div className="aboutPage">
                <AboutHero />
                <AboutBanner />
                <Team />
                <div className="aboutInfo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-12 imageDiv"  data-aos="flip-right" data-aos-delay="100" data-aos-duration="600">
                                <img src="/assets/images/aboutInfoImage.png" alt="people-handshake-image" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12" data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                                <div className="text align-self-center">                                    
                                    <h2 className="updatedSectionMainHeading">About us</h2>
                                    <h1>Lorem, ipsum dolor.</h1>
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet in aperiam, velit ipsum quo. Laboriosam veritatis quo numquam quasi aliquam expedita dolore at sunt. Earum perspiciatis eius eos! Ex voluptatum corrupti inventore cupiditate tempore?</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TestimonialsUpdated />
            </div>
            <ContactEmail />
            <Footer />
        </>
    );
}

export default AboutPage;