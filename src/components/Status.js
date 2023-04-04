import React from "react";
import "../styles/status.css";
import profilePic from "../images/default-profile-pic.jpg";
import moreIcon from "../icons/more-icon.svg";
import closeIcon from "../icons/close-button.svg";
import Like from "./Like";
import WriteComment from "./WriteComment";
import Comment from "./Comment";
import Share from "./Share";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const formatDate = (timestamp) => {
    const date = timestamp.toDate();
    let formattedDate = date.toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"});
    const todaysDate = new Date().toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"});

    if (formattedDate === todaysDate) {
        formattedDate = dayjs(date).fromNow();
    }

    return formattedDate;
}

const Status = ({userData, postData, db, user}) => {

    const formattedDate = formatDate(postData.timestamp);

    return (
        <div className="status-container">
            <div>
                <div className="left-info status">
                    <img className="header-button" src={profilePic}></img>
                    <div className="status-data">
                        <div className="status-username">{userData.firstName} {userData.lastName}</div>
                        <div className="status-time">{formattedDate}</div>
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
                <div className="status-content">{postData.content}</div>
            </div>
            <div className="status-interactive-options">
                <Like user={user} db={db} postData={postData}/>
                <Comment/>
                <Share/>
            </div>
            <WriteComment/>
        </div>
    )
}

export default Status