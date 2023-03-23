import React from "react";
import "../styles/header.css";
import logo from "../icons/fb-clone-logo.png";
import searchIcon from "../icons/search-icon.svg";

const Header = () => {
    return (
        <div className="header">
            <img className="logo-small" src={logo} alt="logo"></img>
            <div>
                <input className="search-box" placeholder="Search Facebook Clone" autoComplete="off" type="search" name="search"></input>
            </div>
        </div>
    )
}

export default Header;