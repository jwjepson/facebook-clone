import React from "react";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";

const PhotosPage = ({userData, user}) => {
    return (
        <>
        <Header user={user}/>
        <ProfileHeader userData={userData}/>
        <div className="profile-content-container">Photos Page</div>
        </>
    )
}

export default PhotosPage;