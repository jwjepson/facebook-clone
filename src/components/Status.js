import React, { useEffect } from "react";
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
            {postData.likes.length > 0 && (
                <div className="likes">
                <div className="like-count">
                    <svg aria-label="like icon" viewBox="0 96 960 960" className="like-icon count">
                        <path d="M729 960H241V418l290-301 43 37q10.875 9.129 14.938 20.065Q593 185 593 199.32V211l-46 207h316q28.2 0 50.6 22.4Q936 462.8 936 491v85.33q0 11.291-3 26.524T925 629L805.33 906.745q-10.675 22.273-31.71 37.764Q752.586 960 729 960ZM181 418v542H63V418h118Z"/>
                    </svg>
                    {(postData.likes.length)}
                </div>
            </div>
            )}
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