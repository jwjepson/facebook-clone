import React from "react";
import "../styles/writecomment.css";
import profilePic from "../images/default-profile-pic.jpg";

const WriteComment = () => {
    return (
        <div className="write-comment-container">
            <img src={profilePic} className="write-comment-avatar"></img>
            <input className="write-comment-input" name="write-comment" placeholder="Write a comment..." type="text"></input>
        </div>
    )
}

export default WriteComment;