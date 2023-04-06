import React from "react";
import { checkPermission } from "../helpers/checkPermission";

const AboutPage = ({userData, user, db}) => {

    return (
        checkPermission(user, userData) ? (
            <div className="profile-content-container">{userData.email}</div>
        ) : (
            <div className="no-content-message">No content to show</div>
        )
    )
}

export default AboutPage;