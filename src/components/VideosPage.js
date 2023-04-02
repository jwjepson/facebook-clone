import React from "react";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";

const VideosPage = ({userData, user}) => {
    return (
        <>
        <Header user={user}/>
        <ProfileHeader userData={userData}/>
        <div className="profile-content-container">Videos Page</div>
        </>
    )
}

export default VideosPage;