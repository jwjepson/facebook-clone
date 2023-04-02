import React from "react";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";

const About = ({userData, user}) => {
    return (
        <>
        <Header user={user}/>
        <ProfileHeader userData={userData}/>
        <div className="profile-content-container">{userData.uid}</div>
        </>
    )
}

export default About;