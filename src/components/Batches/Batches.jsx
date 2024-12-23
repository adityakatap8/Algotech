import React from 'react';
import './index.css';
import bothPin from '../../assets/bothPin.png'

function Batches() {
    return (
        <div className="container">
            <div className="pin-container">
                <img src={bothPin} alt="Pin" className="pin-image" />
            </div>
            <div className="row">
            <div className="batches-title text-center mt-5">
                        <h1>On-Going Batches</h1>
                    </div>
                <div className='col-md-6'>
                  
                    <div className="batch-cards mt-5">
                        <div className="col-md-4">
                            <div className="cardOne">
                                <div className="card-style">
                                    <div className="flex items-center justify-center h-full">

                                        <div><h2>Data Science and & Machine Learning</h2></div>
                                        <div className='mt-3 d-flex'>
                                            <h2>Start Date:</h2>
                                            <span className='card-date'>24th Nov</span>
                                        </div>
                                        <div className='mt-3 d-flex'>
                                            <h2>Duration:</h2>
                                            <span className='card-date'>12 Weeks</span>
                                        </div>
                                        <div className='mt-3 d-flex'>
                                            <h3>Content Access:</h3>
                                            <span className='card-date'>Lifetime</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="batch-cards mt-5">
                        <div className="col-md-4">
                            <div className="cardOne">
                                <div className="card-style">
                                    <div className="flex items-center justify-center h-full">

                                        <div><h2>Data Science and & Machine Learning</h2></div>
                                        <div className='mt-3 d-flex'>
                                            <h2>Start Date:</h2>
                                            <span className='card-date'>24th Nov</span>
                                        </div>
                                        <div className='mt-3 d-flex'>
                                            <h2>Duration:</h2>
                                            <span className='card-date'>12 Weeks</span>
                                        </div>
                                        <div className='mt-3 d-flex'>
                                            <h3>Content Access:</h3>
                                            <span className='card-date'>Lifetime</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div></div>
        </div>
    );
}

export default Batches;
