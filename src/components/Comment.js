import React, { useEffect, useState } from "react";
import "../styles/comment.css";
import profilePic from "../images/default-profile-pic.jpg";
import { doc, getDoc } from "firebase/firestore";

const Comment = ({commentData}) => {

    return (
        <div className="comment-container">
            <img src={profilePic} className="write-comment-avatar"></img>
            <div className="comment-data">
                <div className="comment-user">{commentData.postedBy.firstName} {commentData.postedBy.lastName}</div>
                <p className="comment">{commentData.content}</p>
            </div>
        </div>
    )
}

export default Comment;