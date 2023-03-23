import React from "react";
import likeIcon from "../icons/like-icon.svg";

const Like = () => {
    return (
        <div className="like-button">
            <button type="button" name="like-button"><img className="like-icon" src={likeIcon}></img>Like</button>
        </div>
    )
}

export default Like;