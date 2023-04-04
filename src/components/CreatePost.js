import React, {useState} from "react";
import profilePic from "../images/default-profile-pic.jpg";
import addPhotoIcon from "../icons/add-photo-icon.svg";
import closeButton from "../icons/close-button.svg";
import "../styles/createpost.css";
import {addDoc, collection} from "firebase/firestore";

const CreatePost = ({close, userData, db, user}) => {

    const [postContent, setPostContent] = useState("");

    const handleChange = (e) => {
        setPostContent(e.target.value);
    }

    const handlePost = async (e) => {
        e.preventDefault();
        close();
        const docRef = await addDoc(collection(db, "posts"), {
            content: postContent,
            postedBy: user.uid,
            timestamp: new Date(),
            likes: [],
        });
    }

    return (
        <div className="create-post-container">
            <div className="create-post-header">
                <h4 className="create-post-title">Create post</h4>
                <img onClick={close} className="close-button" src={closeButton}></img>
            </div>
            <div className="create-post-data">
                <img className="header-button" src={profilePic}></img>
                <div className="create-post-user">{userData.firstName} {userData.lastName}</div>
            </div>
            <form onSubmit={handlePost}>
                <textarea className="create-post-content" onChange={handleChange} value={postContent} placeholder={`What's on your mind, ${userData.firstName}?`}></textarea>
                <div className="create-post-options">
                    <ul>
                        <li><img className="add-photo-icon" src={addPhotoIcon}></img>Photo/video</li>
                    </ul>
                </div>
                <button type="submit" className="post-button">Post</button>
            </form>
        </div>
    )
}

export default CreatePost;