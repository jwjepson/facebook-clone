import React from "react";
import profilePic from "../images/default-profile-pic.jpg";
import moreIcon from "../icons/more-icon.svg";
import closeIcon from "../icons/close-button.svg";
import Like from "./Like";
import WriteComment from "./WriteComment";
import Comment from "./Comment";
import Share from "./Share";

import "../styles/status.css";

const Status = () => {
    return (
        <div className="status-container">
            <div>
                <div className="left-info status">
                    <img className="header-button" src={profilePic}></img>
                    <div className="status-data">
                        <div className="status-username">Username</div>
                        <div className="status-time">30m</div>
                    </div>
                </div>
                <div className="right-info status">
                    <div className="status-options">
                        <button type="button" name="more-button"><img className="status-option-icon" src={moreIcon}></img></button>
                        <button type="button" name="close-button"><img className="status-option-icon" src={closeIcon}></img></button>
                    </div>
                </div>
            </div>
            <div className="status">
                <div className="status-content">This is a test post.</div>
            </div>
            <div className="status-interactive-options">
                <Like/>
                <Comment/>
                <Share/>
            </div>
            <WriteComment/>
        </div>
    )
}

export default Status