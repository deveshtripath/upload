import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Total() {
    return (
        <div>
            <div className="d-flex mt-3 phone-checkout d-md-none justify-content-center align-items-center">
                    <div className="mr-5">
                        <img src="./img/WhatsApp Image 2021-09-10 at 12.15.14 AM.jpeg" alt=""/>
                    </div>
                    <div>
                        <h6>Apple iphone 12</h6>
                        <span className="d-block">$69</span>
                        <span className="d-block">Red</span>
                        <div className="d-flex">
                            <p className="mr-3"><i className="fas fa-plus-circle"></i></p>
                            <p>1</p>
                            <p className="ml-3"><i className="fas fa-minus-circle"></i></p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Total
