import React, { useEffect, useState } from "react";
import "../styles/status.css";
import profilePic from "../images/default-profile-pic.jpg";
import moreIcon from "../icons/more-icon.svg";
import closeIcon from "../icons/close-button.svg";
import Delete from "./Delete";
import Like from "./Like";
import WriteComment from "./WriteComment";
import CommentButton from "./CommentButton";
import Share from "./Share";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Comment from "./Comment";
import PostModal from "./PostModal";
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore";
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

const Status = ({userData, postData, db, user, currentUserData, source}) => {

    const formattedDate = formatDate(postData.timestamp);

    const [comments, setComments] = useState([]);
    const [postModalDisplay, setPostModalDisplay] = useState(false);

    const togglePostModalDisplay = () => {
        setPostModalDisplay(!postModalDisplay);
    }

    useEffect(() => {
        const getCommentsData = async () => {
            let q;
            if (source === "postModal") {
                q = query(collection(db, "comments"), where("postId", "==", postData.id), orderBy("timestamp", "desc"));
            } else {
                q = query(collection(db, "comments"), where("postId", "==", postData.id), orderBy("timestamp", "desc"), limit(3));
            }
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const docsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setComments(docsData);
            });
            return unsubscribe;
        }
        getCommentsData();
    }, [])

    return (
        <>
            {postModalDisplay && (
                <PostModal close={togglePostModalDisplay} currentUserData={currentUserData} db={db} user={user} userData={userData} postData={postData}/>
            )}
            <div className={`status-container ${source === "postModal" ? "postModal" : ""}`}>
                <div>
                    <div className="left-info status">
                        <img className="header-button profile" src={userData.profilePicURL}></img>
                        <div className="status-data">
                            <div className="status-username">{userData.firstName} {userData.lastName}</div>
                            <div className="status-time">{formattedDate}</div>
                        </div>
                    </div>
                    <div className="right-info status">
                        <div className="status-options">
                            <button type="button" name="more-button"><img className="status-option-icon" src={moreIcon}></img></button>
                            <Delete db={db} type="posts" id={postData.id}/>
                        </div>
                    </div>
                </div>
                <div className="status">
                    <div className="status-content">{postData.content}</div>
                    {postData.media && (
                        <div className="media-content"><img src={postData.media}></img></div>
                    )}
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
                    <CommentButton/>
                    <Share/>
                </div>
                <div className="comment-section">
                    {source !== "postModal" && (
                        comments.length > 2 && (
                            <h5 onClick={togglePostModalDisplay} className="view-more-comments">View more comments</h5>
                        )
                    )}
                    {source === "postModal" ? (
                        comments.slice().reverse().map((comment) => (
                            <Comment formatDate={formatDate} db={db} user={user} key={comment.id} commentData={comment}/>
                        ))
                    ) : (
                        comments.slice(0, 2).reverse().map((comment) => (
                            <Comment formatDate={formatDate} db={db} user={user} key={comment.id} commentData={comment}/>
                        ))
                    )}
                </div>
                {source !== "postModal" && (
                    <WriteComment currentUserData={currentUserData} user={user} postData={postData} db={db}/>
                )}
            </div>
        </>
    )
}

export default Status