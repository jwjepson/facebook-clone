import React from "react";
import Intro from "./Intro";
import "../styles/profilecontent.css";
import StatusCreator from "./StatusCreator";

const ProfileContent = () => {
    return (
        <div className="profile-content-container">
            <div className="profile-home-content">
                <div className="profile-left-sidebar">
                    <Intro/>
                </div>
                <div className="profile-timeline">
                    <StatusCreator/>
                </div>
            </div>
        </div>
    )
}

export default ProfileContent;