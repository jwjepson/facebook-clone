import React, { useState } from "react";
import profilePic from "../images/default-profile-pic.jpg";
import "../styles/profileheader.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

const ProfileHeader = ({userData}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const tabs = ["posts", "about", "friends", "photos", "videos"];

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        switch(tabIndex) {
            case 0:
                return navigate("/username");
            case 1: 
                return navigate("/username/about");
            case 2: 
                return navigate("/username/friends");
            case 3:
                return navigate("/username/photos");
            case 4: 
                return navigate("/username/videos");
            default:
                return navigate("/username");
        }
    }

    const getActiveTab = (pathname) => {
        switch(pathname) {
            case "/username/about":
                return 1;
            case "/username/friends":
                return 2;
            case "/username/photos":
                return 3;
            case "/username/videos":
                return 4;
            default:
                return 0;
        }
    }

    const initialActiveTab = getActiveTab(location.pathname);
    const [activeTab, setActiveTab] = useState(initialActiveTab);
    
    return (
        <>
        <div className="profile-header-container">
            <div className="profile-cover"></div>
            <div className="profile-header-middle-section">
                <div className="profile-header-left-data">
                    <img className="profile-header-picture" src={profilePic}></img>
                    <div className="profile-data">
                        <h1 className="profile-username">{userData.firstName} {userData.lastName}</h1>
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