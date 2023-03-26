import React from "react";
import profilePic from "../images/default-profile-pic.jpg";
import "../styles/profileheader.css";
import Header from "./Header";

const ProfileHeader = () => {
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
                    <li>Posts</li>
                    <li>About</li>
                    <li>Friends</li>
                    <li>Photos</li>
                    <li>Videos</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default ProfileHeader