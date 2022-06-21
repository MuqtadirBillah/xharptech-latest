import React from "react";

function BecomeBanner(){
    return(
        <div className="becomeBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 align-self-center left">
                        <h1>Become a Top<br />Agency in just a Year</h1>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 align-self-center right">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <h2>72+</h2>
                                <h4>Successful Projects</h4>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <h2>20+</h2>
                                <h4>Team Members</h4>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <h2>10</h2>
                                <h4>Years of Experience</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomeBanner;