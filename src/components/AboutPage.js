import React from "react";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";

const About = ({userData}) => {
    return (
        <>
        <Header/>
        <ProfileHeader userData={userData}/>
        <div className="profile-content-container">{userData.uid}</div>
        </>
    )
}

export default About;