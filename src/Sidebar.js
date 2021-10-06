import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Total from './Total';
import "./Sidebar.css"

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
                    <Total
                        src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
                </div>
                <div className="my-2 d-flex phone-checkout justify-content-center align-items-center">
                    <Total
                        src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
                </div>
                <div className="d-flex mt-3 phone-checkout justify-content-center align-items-center">
                    <Total
                        src="https://images.unsplash.com/photo-1557189750-56d1be9e963a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
                </div>
                <div className="d-flex mt-3 phone-checkout justify-content-center align-items-center">
                    <Total
                        src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
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
             <div>
                 <img width="300px" className="images" src="https://image.shutterstock.com/image-vector/super-sale-40-off-lettering-600w-618684614.jpg" alt=""/>
             </div>
                <div className="product-center ">
                    <h6>5 products</h6>
                    <div className="d-flex justify-content-between">
                        <h6 className="margin-className">price -</h6>
                        <p className="px-4">$2997</p>
                    </div>
                    <div className="d-flex justify-content-around">
                        <h6 className="margin-className">Discount -</h6>
                        <p className="">$0</p>
                    </div>
                    <div className="d-flex">
                        <h6 className="margin-className px-2">Total -</h6>
                        <p className="">$2997</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Sidebar
