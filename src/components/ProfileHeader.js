import React, { useState } from "react";
import profilePic from "../images/default-profile-pic.jpg";
import "../styles/profileheader.css";
import Header from "./Header";

const ProfileHeader = () => {

    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["Posts", "About", "Friends", "Photos", "Videos"];

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    return (
        <>
        <div className="profile-header-container">
            <div className="profile-cover"></div>
            <div className="profile-header-middle-section">
                <div className="profile-header-left-data">
                    <img className="profile-header-picture" src={profilePic}></img>
                    <div className="profile-data">
                        <h1 className="profile-username">User Name</h1>
                        <a className="profile-friend-count">500 friends</a>
                    </div>
                </div>
                <div className="profile-actions">
                    <button type="button">Friends</button>
                    <button type="button">Message</button>
                </div>
            </div>
            <div className="profile-navigation">
                <ul>
                    {tabs.map((tab, index) => (
                        <li key={index} onClick={() => handleTabClick(index)} className={`profile-nav ${activeTab === index ? "active" : ""}`}>{tab}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default ProfileHeader