import React from "react";
import "../styles/postmodal.css";
import Status from "../components/Status";
import WriteComment from "./WriteComment";
import closeButton from "../icons/close-button.svg";

const PostModal = ({postData, userData, user, db, currentUserData, close}) => {
    return (
        <>
            <div className="post-modal-container">
                <div className="post-modal-header">
                    <h2>{userData.firstName}'s Post</h2>
                    <img onClick={close} className="close-button post-modal" src={closeButton}></img>
                </div>
                <div className="post-modal-status-container">
                    <Status currentUserData={currentUserData} source="postModal" db={db} user={user} userData={userData} postData={postData}/>
                </div>
                <div className="post-modal-comment">
                    <WriteComment currentUserData={currentUserData} user={user} postData={postData} db={db}/>
                </div>
            </div>
            <div className="overlay"></div>
        </>
    )
}

export default PostModal;