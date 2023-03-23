import React from "react";
import commentIcon from "../icons/comment-icon.svg";

const Comment = () => {
    return (
        <div className="comment-button">
            <button type="button" name="comment-button"><img className="comment-icon" src={commentIcon}></img>Comment</button>
        </div>
    )
}

export default Comment;