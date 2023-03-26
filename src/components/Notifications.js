import React from "react";
import "../styles/notifications.css";
import moreIcon from "../icons/more-icon.svg";
import profilePic from "../images/default-profile-pic.jpg";

const Notifications = (props) => {
    return (
        <div className="notifications-container">
            <div className="notifications-header">
                <h4 className="notifications-title">Notifications</h4>
                <img src={moreIcon} className="more-button notifcations"></img>
            </div>
            <div className="notifications">
                <div className="see-all-notifications">
                    <h4>Most recent</h4>
                    <a className="see-all-notifications-link">See all</a>
                </div>
                <ul className="notifications-list">
                    <li className="notification">
                        <img className="notification-avatar" src={profilePic}></img>
                        <div className="notification-content">This is a test notifcation</div>
                    </li>
                    <li className="notification">
                        <img className="notification-avatar" src={profilePic}></img>
                        <div className="notification-content">This is a test notifcation</div>
                    </li>
                    <li className="notification">
                        <img className="notification-avatar" src={profilePic}></img>
                        <div className="notification-content">This is a test notifcation</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Notifications;