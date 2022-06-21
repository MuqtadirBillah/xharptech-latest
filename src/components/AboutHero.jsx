import React from "react";

function AboutHero(){
    return(
        <div className="hero aboutHero">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                                        <h2 className="updatedSectionMainHeading">About us</h2>
                                        <h1>Lorem, ipsum dolor.</h1>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quibusdam, maiores ipsa nam neque dolor dolores in libero iste. Laudantium beatae totam perspiciatis! Perspiciatis necessitatibus culpa quaerat minus pariatur dolores recusandae alias atque maiores aspernatur!</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 right align-self-center">
                                        <img src="/assets/images/aboutHero.png" alt="hero-image" />
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
    );
}

export default AboutHero;