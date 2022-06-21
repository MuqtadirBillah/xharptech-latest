import React from "react";
import {Helmet} from "react-helmet";
import Navigation from "./Navigation";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";

function OurPortfolioPage(){
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Portfolio | XharpTech – Successful Projects</title>
                <meta name="keywords" content="ui/ux design, web design, digital design, portfolio, web development, mobile application, xharptech" />
                <meta name="description" content="Our portfolio speaks for itself, we have created top-notch digital & stunning digital experiences for our clients. Visit our website to see how we can help you with your ui/ux needs." />
            </Helmet>
            <Navigation />
            <div className="ourPortfolio ourPortfolioPage">
                <div className="hero portfolioHero">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="slide">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                                                <h2 className="updatedSectionMainHeading">Portfolio</h2>
                                                <h1>Our Work</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia, omnis cumque, at autem magni repellat repellendus nemo enim suscipit expedita laudantium atque delectus fugiat voluptas a dolores natus deserunt sunt similique corporis voluptatum praesentium.</p>
                                                <button>BOOK A MEETING</button>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 right align-self-center">
                                                <img src="/assets/images/portHeroImg.png" alt="hero-image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> */}
                    </div>
                </div>
                <div className="container">
                    <div className="row">            
                        <h3 className="updatedSectionMainHeading">Our Portfolio</h3>
                        <div className="row ourHeading">
                            <div className="col-lg-12 col-md-12 col-sm-12 align-self-center ourLeft">
                                <h1>LOOK & FEEL</h1>
                            </div>
                        </div>
                        <div className="tiless">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div>
                                        <img src="/assets/images/port.png" alt="" />
                                        <div className="content">
                                            <h3>APP DESIGN</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid laborum odio voluptatibus iste? Neque repudiandae animi nobis perspiciatis ipsam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
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
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div>
                                        <img src="/assets/images/port.png" alt="" />
                                        <div className="content">
                                            <h3>BRANDING LOGO</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid laborum odio voluptatibus iste? Neque repudiandae animi nobis perspiciatis ipsam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
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
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div>
                                        <img src="/assets/images/port.png" alt="" />
                                        <div className="content">
                                            <h3>BRANDING LOGO</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid laborum odio voluptatibus iste? Neque repudiandae animi nobis perspiciatis ipsam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
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
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div>
                                        <img src="/assets/images/port.png" alt="" />
                                        <div className="content">
                                            <h3>APP DESIGN</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid laborum odio voluptatibus iste? Neque repudiandae animi nobis perspiciatis ipsam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
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
                                <div className="col-lg-4 col-md-4 col-sm-12">
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
            <ContactEmail />
            <Footer />
        </>
    );
}

export default OurPortfolioPage;