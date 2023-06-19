import React, { useState } from "react";
import "../Navigation/nav.css"
import { NavLink } from "react-router-dom";
const Navigation = () => {
 
    return(
    <div className="navigation" >
         <div className="logo">Cyfuture</div>
    <div className="navitems">
        <NavLink  to = "/home">Home</NavLink>
        <NavLink  to = "/aboutUs">About Us</NavLink>
        <NavLink to = "/contactUs">Contact Us</NavLink>
        <NavLink to = "/career">Careers</NavLink>
    </div>
    </div>
    )
}

export default Navigation;