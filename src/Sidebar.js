import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Total from './Total';

function Sidebar() {
    const mystyle = {
      color: "red",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontSize:"10px",
      fontFamily: "Arial",
      fontWeight:"700",
    };
    return (
        <section className="d-flex justify-content-around">
            <div>
                <div className="d-flex phone-checkout justify-content-center align-items-center">
                    <div className="mr-5">
                        <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" width="200px" height="150px" alt=""/>
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
                <div className="d-flex mt-3 phone-checkout justify-content-center align-items-center">
                    <div className="mr-5">
                        <img src="https://www.zdnet.com/a/hub/i/2020/10/13/4c8c7dee-9629-4940-b467-fc2c7a39eb2b/2020-10-13-at-2-30-13-pm.jpg" width="200px" height="150px" alt=""/>
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
                <div className="d-flex mt-3 phone-checkout justify-content-center align-items-center">
                    <div className="mr-5">
                        <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" width="200px" height="150px" alt=""/>
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

                <div className="d-flex d-md-none justify-content-around mt-5">
                    <h4>Total</h4>
                    <p style={mystyle}>$2997</p>
                </div>

                <footer className="d-flex justify-content-around mt-3 mb-3">
                    <button className="btn btn-primary">Add More</button>
                    <button className="btn btn-success"><i className="fas fa-arrow-right"></i></button>
                </footer>
            </div>
            <div className="product-total">
                <div className="product-center">
                    <h6>5 products</h6>
                    <div className="d-flex justify-content-between">
                        <h6 className="margin-className">price -</h6>
                        <p className="">$2997</p>
                    </div>
                    <div className="d-flex justify-content-around">
                        <h6 className="margin-className">Discount -</h6>
                        <p className="">$0</p>
                    </div>
                    <div className="d-flex">
                        <h6 className="margin-className">Total -</h6>
                        <p className="">$2997</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Sidebar
