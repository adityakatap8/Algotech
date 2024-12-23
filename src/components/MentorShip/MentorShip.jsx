import React from 'react'
import './index.css'
import line6 from "../../assets/Line 6.png"
import butterfly from "../../assets/butterfly.png"

function MentorShip() {
    return (
        <div className='container'>
            <div className="gap"></div>
            <div className='row'>
                <div><img src={line6} alt="" /></div>
            </div>

            <div className="row mx-auto">
                <div className="batches-title mt-5">
                    <img src={butterfly} alt="" className="mr-2" />
                    <h1>Mentorship By IIT Alumnis</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <ul className="list-disc pl-5 custom-list">
                        <li>Regular Mock Group Discussion</li>
                        <li>LinkedIn and Naukri Profile Building Sessions</li>
                        <li>Resume Building By using AI tools</li>
                        <li>Interview Mock-ups session by Industry Experts</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default MentorShip
