import React from "react";

function Footer(){

    var d = new Date();
    var year = d.getFullYear();

    return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 left" data-aos="flip-right" data-aos-delay="100" data-aos-duration="600">
                        <img src="/assets/images/logo.png" alt="" />
                        <p>Follow us</p>
                        <h5>
                            <a href='/' ><span className="google"><i class="fab fa-google-plus-g"></i></span></a>
                            <a href='/' ><span className="facebook"><i class="fab fa-facebook-f"></i></span></a>
                            <a href='/' ><span className="twitter"><i class="fab fa-twitter"></i></span></a>
                            <a href='/' ><span className="instagram"><i class="fab fa-instagram"></i></span></a>
                            <a href='/' ><span className="linkedin"><i class="fab fa-linkedin-in"></i></span></a>
                        </h5>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mid" data-aos="fade-in" data-aos-delay="100" data-aos-duration="600">
                        <h3>CORPORATE HEADQUATERS</h3>
                        <div className="info">
                            <div className="row">
                                <div className="col-1 d-flex align-items-center">
                                    <p><i class="fas fa-map-marker-alt"></i></p>
                                </div>
                                <div className="col-11 d-flex align-items-center">
                                    <p>Number 57, Shahid Rezaei, Second<br />Glbarg, West Sepehr Street, Tehran</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 d-flex align-items-center">
                                    <p><i class="fas fa-phone-alt"></i></p>
                                </div>
                                <div className="col-11 d-flex align-items-center">
                                    <p>09102891122</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 d-flex align-items-center">
                                    <p><i class="fa fa-envelope"></i></p>
                                </div>
                                <div className="col-11 d-flex align-items-center">
                                    <p>info@dbcompany.net</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 right" data-aos="flip-right" data-aos-delay="100" data-aos-duration="600">
                        <h3>SOCIAL & NEWSLETTER</h3>
                        <h1>Get the latest news<br />about DB</h1>
                        <input type="text" placeholder="Your email address" name="" id="" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="row bottom">
                    <hr />
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 left">
                            <h6>2022 © DBCompany</h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 right">
                            <ul>
                                <li><a href='/'>About Us</a></li>
                                <li><a href='/'>Services</a></li>
                                <li><a href='/'>Career</a></li>
                                <li><a href='/'>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;