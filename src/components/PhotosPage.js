import React from "react";
import {checkPermission} from "../helpers/checkPermission";

const PhotosPage = ({userData, user}) => {
    return (
        checkPermission(user, userData) ? (
            <div className="profile-content-container">Photos Page</div>
        ) : (
            <div className="no-content-message">No photos to show</div>
        )
    )
}

export default PhotosPage;