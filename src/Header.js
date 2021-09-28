import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontSize:"10px",
        fontFamily: "Arial"
      };
    return (
        <div>
            <div className="d-flex justify-content-around align-item-center pt-5">
            <h3>Invoicing</h3>
                <input className="w-50 border-0" type="text" style={mystyle} placeholder='Search'/>
                <h3 className="bar-code">hi</h3>
        </div>
        </div>
    )
}

export default Header
