import React from "react";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";

const PhotosPage = ({userData}) => {
    return (
        <>
        <Header/>
        <ProfileHeader userData={userData}/>
        <div className="profile-content-container">Photos Page</div>
        </>
    )
}

export default PhotosPage;