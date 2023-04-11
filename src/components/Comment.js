import React, { useEffect, useState } from "react";
import "../styles/comment.css";
import profilePic from "../images/default-profile-pic.jpg";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Comment = ({commentData}) => {

    return (
        <div className="comment-container">
            <Link to={`/${commentData.postedBy.userId}`}>
                <img src={profilePic} className="write-comment-avatar"></img>
            </Link>
            <div className="comment-data">
                <Link to={`/${commentData.postedBy.userId}`}>
                    <div className="comment-user">{commentData.postedBy.firstName} {commentData.postedBy.lastName}</div>
                </Link>
                <p className="comment">{commentData.content}</p>
            </div>
        </div>
    )
}

export default Comment;