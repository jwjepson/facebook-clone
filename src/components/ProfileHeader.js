import React, { useState } from "react";
import profilePic from "../images/default-profile-pic.jpg";
import "../styles/profileheader.css";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const ProfileHeader = ({userData , user}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const tabs = ["posts", "about", "friends", "photos", "videos"];

    let {userId} = useParams();

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        switch(tabIndex) {
            case 0:
                return navigate(`/${userId}`);
            case 1: 
                return navigate(`/${userId}/about`);
            case 2: 
                return navigate(`/${userId}/friends`);
            case 3:
                return navigate(`/${userId}/photos`);
            case 4: 
                return navigate(`/${userId}/videos`);
            default:
                return navigate(`/${userId}`);
        }
    }

    const getActiveTab = (pathname) => {
        switch(pathname) {
            case `/${userId}/about`:
                return 1;
            case `/${userId}/friends`:
                return 2;
            case `/${userId}/photos`:
                return 3;
            case `/${userId}/videos`:
                return 4;
            default:
                return 0;
        }
    }

    const initialActiveTab = getActiveTab(location.pathname);
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    console.log(userData);
    
    return (
        <>
        <div className="profile-header-container">
            <div className="profile-cover"></div>
            <div className="profile-header-middle-section">
                <div className="profile-header-left-data">
                    <img className="profile-header-picture" src={profilePic}></img>
                    <div className="profile-data">
                        <h1 className="profile-username">{userData.firstName} {userData.lastName}</h1>
                        <a className="profile-friend-count">
                            {userData.friends.length === 1 ? (
                                `${userData.friends.length} friend`
                            ) : (
                                `${userData.friends.length} friends`
                            )}
                        </a>
                    </div>
                </div>
                <div className="profile-actions">
                    {userData.friends.includes(user.uid) && (
                        <button type="button">Friends</button>
                    )}
                    {!userData.friends.includes(user.uid) && userData.id !== user.uid && (
                        <button type="button">Add Friend</button>
                    )}
                    {userData.id === user.uid && (
                        <button type="button">Edit Profile</button>
                    )}
                    {userData.id !== user.uid && (
                        <button type="button">Message</button>
                    )}
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