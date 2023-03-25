import React from "react";
import profilePic from "../images/default-profile-pic.jpg";
import "../styles/statuscreator.css";
import addPhotoIcon from "../icons/add-photo-icon.svg";

const StatusCreator = (props) => {
    return (
        <div className="status-creator-container">
            <div className="top-info">
                <img className="header-button" src={profilePic}></img>
                <button onClick={props.open} className="status-creator-button" type="button" name="status-button">What's on your mind, User?</button>
            </div>
            <div className="bottom-options">
                <ul>
                    <li><img className="add-photo-icon" src={addPhotoIcon}></img>Photo/video</li>
                </ul>
            </div>
        </div>
    )
}

export default StatusCreator;