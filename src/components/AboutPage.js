import React from "react";

const AboutPage = ({userData, user, db}) => {

    return (
        <>
        <div className="profile-content-container">{userData.email}</div>
        </>
    )
}

export default AboutPage;