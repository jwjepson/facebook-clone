import React from "react";
import { checkPermission } from "../helpers/checkPermission";

const VideosPage = ({userData, user}) => {
    return (
        checkPermission(user, userData) ? (
            <div className="profile-content-container">Videos Page</div>
        ) : (
            <div className="no-content-message">No videos to show</div>
        )
    )
}

export default VideosPage;