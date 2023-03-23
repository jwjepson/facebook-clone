import React from "react";
import shareIcon from "../icons/share-icon.svg";

const Share = () => {
    return (
        <div className="share-button">
            <button type="button" name="share-button"><img className="share-icon" src={shareIcon}></img>Share</button>
        </div>
    )
}

export default Share;