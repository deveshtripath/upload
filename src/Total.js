import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Total({src}) {
    return (
        <>
                    <div className="mr-5">
                        <img src={src} width="200px" height="150px" alt=""/>
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
        </>
    )
}

export default Total
