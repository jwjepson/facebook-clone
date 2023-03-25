import React from "react";
import profilePic from "../images/default-profile-pic.jpg";
import addPhotoIcon from "../icons/add-photo-icon.svg";
import closeButton from "../icons/close-button.svg";
import "../styles/createpost.css";

const CreatePost = (props) => {
    return (
        <div className="create-post-container">
            <div className="create-post-header">
                <h4 className="create-post-title">Create post</h4>
                <img onClick={props.close} className="close-button" src={closeButton}></img>
            </div>
            <div className="create-post-data">
                <img className="header-button" src={profilePic}></img>
                <div className="create-post-user">Username</div>
            </div>
            <textarea className="create-post-content" placeholder="What's on your mind, User?"></textarea>
            <div className="create-post-options">
                <ul>
                    <li><img className="add-photo-icon" src={addPhotoIcon}></img>Photo/video</li>
                </ul>
            </div>
            <button type="button" className="post-button">Post</button>
        </div>
    )
}

export default CreatePost;