import React, {useState} from "react";
import "../styles/header.css";
import logo from "../icons/fb-clone-logo.png";
import notificationIcon from "../icons/notification-icon.svg";
import chatIcon from "../icons/chat-icon.svg";
import Notifications from "./Notifications";
import defaultProfile from "../images/default-profile-pic.jpg";
import { Link } from "react-router-dom";

const Header = ({user}) => {
    const [notificationsDisplay, setnotificationsDisplay] = useState(false);

    const toggleNotificationsDisplay = () => {
        setnotificationsDisplay(!notificationsDisplay);
    }

    return (
        <>
        {notificationsDisplay && (
            <Notifications/>
        )}
        <div className="header">
            <div className="left-info">
                <Link to="/">
                    <img className="logo-small" src={logo} alt="logo"></img>
                </Link>
                <input className="search-box" placeholder="Search Facebook Clone" autoComplete="off" type="search" name="search"></input>
            </div>
            <div className="right-info">
                <button className="header-button" type="button" name="chat-button"><img src={chatIcon}></img></button>
                <button onClick={toggleNotificationsDisplay} className="header-button" type="button" name="notification-button"><img src={notificationIcon}></img></button>
                <Link to={`/${user.uid}`}>
                    <button className="header-button" type="button" name="profile-button"><img src={defaultProfile}></img></button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Header;