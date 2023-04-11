import React, { useEffect, useState } from "react";
import "../styles/comment.css";
import profilePic from "../images/default-profile-pic.jpg";
import { doc, getDoc } from "firebase/firestore";
import closeIcon from "../icons/close-button.svg";
import Delete from "../components/Delete";
import { Link } from "react-router-dom";

const Comment = ({commentData, user, formatDate, db}) => {

    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const formattedDate = formatDate(commentData.timestamp);

    return (
        <div className="comment-container" onMouseEnter={() => setShowDeleteButton(true)} onMouseLeave={() => setShowDeleteButton(false)}>
            <div>
                <Link to={`/${commentData.postedBy.userId}`}>
                    <img src={profilePic} className="write-comment-avatar"></img>
                </Link>
                <div className="comment-data">
                    <Link to={`/${commentData.postedBy.userId}`}>
                        <div className="comment-user">{commentData.postedBy.firstName} {commentData.postedBy.lastName}</div>
                    </Link>
                    <p className="comment">{commentData.content}</p>
                </div>
                {user.uid === commentData.postedBy.userId && (
                    <Delete className={showDeleteButton ? "active" : ""}db={db} type="comments" id={commentData.id}/>
                )}
            </div>
                <div className="comment-timestamp">{formattedDate}</div>
        </div>
    )
}

export default Comment;