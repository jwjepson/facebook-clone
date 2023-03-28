import React from "react";
import Intro from "./Intro";
import "../styles/profilecontent.css";
import PhotosListSmall from "./PhotosListSmall";
import StatusCreator from "./StatusCreator";
import FriendsListSmall from "./FriendsListSmall";
import Status from "./Status";

const ProfileContent = () => {
    return (
        <div className="profile-content-container">
            <div className="profile-home-content">
                <div className="profile-left-sidebar">
                    <Intro/>
                    <PhotosListSmall/>
                    <FriendsListSmall/>
                </div>
                <div className="profile-timeline">
                    <StatusCreator/>
                </div>
            </div>
        </div>
    )
}

export default ProfileContent;