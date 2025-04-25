import { LOGO_URl } from "../utils/constants";
import Login from "./Login";
import React from "react";
import { Link } from "react-router-dom";

export const Header=()=>{
    return(
        <div className="header">
        <div ><img className="logo"src={LOGO_URl}/></div>
        <div className="nav-items">
        <ul>
            <li> <Link to="/body">Home</Link></li>
            <li ><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
           <li> <Login/></li>
        </ul>
        </div>
        </div>
    )
}