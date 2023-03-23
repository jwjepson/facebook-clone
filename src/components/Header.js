import React from "react";
import "../styles/header.css";
import logo from "../icons/fb-clone-logo.png";
import notificationIcon from "../icons/notification-icon.svg";
import chatIcon from "../icons/chat-icon.svg";
import defaultProfile from "../images/default-profile-pic.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="left-info">
                <img className="logo-small" src={logo} alt="logo"></img>
                <input className="search-box" placeholder="Search Facebook Clone" autoComplete="off" type="search" name="search"></input>
            </div>
            <div className="right-info">
                <button className="header-button" type="button" name="chat-button"><object type="image/svg+xml" data={chatIcon}></object></button>
                <button className="header-button" type="button" name="notifcation-button"><object type="image/svg+xml" data={notificationIcon}></object></button>
                <button className="header-button" type="button" name="profile-button"><img src={defaultProfile}></img></button>
            </div>
        </div>
    )
}

export default Header;