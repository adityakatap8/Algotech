import "./index.css"; // Ensure Tailwind CSS is imported
import React from 'react';
import lineOne from "../../assets/Line 1.png"; 
import lineTwo from "../../assets/Line 2.png"; 

function Welcom() {
    return (
        <div className="container mt-5">
            <img src={lineOne} alt="" className="mx-auto" />
            <div className="container mt-5 d-flex justify-content-between">
                <div className="col-md-10">
                    <h1 className="title">Welcome To Algorithm Tech</h1>
                </div>
                <div className="col-md-2 mt-2">
                    <button className="enroll">
                        Enroll Now
                    </button>
                </div>
            </div>
            <div>
                <div className="row mt-4 m-auto">
                    <h4>Join a community of developers and learners, where excellence meets opportunity.</h4>

                    </div>
                    <div className="mt-5">
                    <img src={lineTwo} alt="" className="mx-auto" />
                    </div>
                    
                </div>
          
        </div>
    );
}

export default Welcom;
