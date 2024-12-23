import React from 'react'
import "./index.css"
import privateTutor from "../../assets/privateTutor.png"
import communitySupport from "../../assets/communitySupport.png"
import interviewPrep from "../../assets/interviewPrep.png"
import line1 from "../../assets/Line 1.png"
import bulb from "../../assets/bulb.png"

function SectionThird() {
    return (
        <div className="container mt-5">
            <img src={line1} alt="" />
            <div className="row mx-auto">
                <div className="batches-title mt-5">
                    <img src={bulb} alt="" className="mr-2" />
                    <h1>What's In It For You</h1>
                </div>
            </div>

            <div className="row">

                <div className='col-md-4'>
                    <img className='ST-img' src={privateTutor} alt="" />
                    <p className="ST-content">
                        Gain access to exclusive video tutorials structured into various modules that build upon each other. Each module also includes practice questions and weekly live doubt sessions along with live webinars.
                    </p>
                </div>
                <div className='col-md-4'>
                    <img className='ST-img' src={interviewPrep} alt="" />
                    <p className="ST-content">
                        Challenge yourself with weekly quizzes and earn exclusive rewards and gifts to celebrate your progress. Top performers will also get a chance to feature on the official The Code Dose YouTube channel.
                    </p>
                </div>
                <div className='col-md-4 ml-3'>
                    <img className='ST-img' src={communitySupport} alt="" />
                    <p className="ST-content">
                        Join a supportive and interactive community of fellow JavaScript developers on Discord where you can share ideas, ask questions, and grow together.
                    </p>
                </div>

            </div>
            <div className='gap'></div>
        </div>
    )
}

export default SectionThird
