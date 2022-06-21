import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials(){

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    var backStyle = {
        backgroundImage: `url("/assets/images/testback.png")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          }
        ]
    };

    return(
        <div className="testimonials" data-aos="fade-up"  data-aos-delay="50">
            <h5 data-aos="fade-down"  data-aos-delay="80" data-aos-duration="800">WHAT PEOPLE SAY ABOUT US</h5>
            <h1 className="sectionMainHeading" data-aos="fade-up"  data-aos-delay="80" data-aos-duration="800">Our great clients</h1>
            <Slider {...settings}>
            <div className="testimonial">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 left align-self-center" data-aos="flip-up"  data-aos-delay="100" data-aos-duration="800">
                            <video src="https://flex-global.s3.eu-west-2.amazonaws.com/assets/testimonials/customerly.mp4#t=0.01" loop muted autoplay controls />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 right align-self-center" data-aos="flip-down"  data-aos-delay="100" data-aos-duration="800">
                            <div className="great">
                                <img src="/assets/images/great.png" alt="" />
                            </div>
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</h4>
                            <div className="userInfo align-self-end">
                                <div className="line1">
                                    <i class="fas fa-comment-alt"></i> <span className="clientName">Luca Micheli</span>
                                </div>
                                <div className="line2">
                                    <p>CEO | Where does it come from? | Holo Lolo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 left align-self-center" data-aos="flip-up"  data-aos-delay="100" data-aos-duration="800">
                            <video src="https://flex-global.s3.eu-west-2.amazonaws.com/assets/testimonials/arrium.mp4#t=0.01" loop muted autoplay controls />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 right align-self-center" data-aos="flip-down"  data-aos-delay="100" data-aos-duration="800">
                            <div className="great">
                                <img src="/assets/images/great.png" alt="" />
                            </div>
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</h4>
                            <div className="userInfo align-self-end">
                                <div className="line1">
                                    <i class="fas fa-comment-alt"></i> <span className="clientName">Luca Micheli</span>
                                </div>
                                <div className="line2">
                                    <p>CEO | Where does it come from? | Holo Lolo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 left align-self-center" data-aos="flip-up"  data-aos-delay="100" data-aos-duration="800">
                            <video src="https://flex-global.s3.eu-west-2.amazonaws.com/assets/testimonials/classicsf5.mp4#t=0.01" loop muted autoplay controls />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 right align-self-center" data-aos="flip-down"  data-aos-delay="100" data-aos-duration="800">
                            <div className="great">
                                <img src="/assets/images/great.png" alt="" />
                            </div>
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</h4>
                            <div className="userInfo align-self-end">
                                <div className="line1">
                                    <i class="fas fa-comment-alt"></i> <span className="clientName">Luca Micheli</span>
                                </div>
                                <div className="line2">
                                    <p>CEO | Where does it come from? | Holo Lolo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Slider>
        </div>
    );
}

export default Testimonials;