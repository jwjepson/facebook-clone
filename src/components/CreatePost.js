import React, {useState, useRef, useEffect} from "react";
import profilePic from "../images/default-profile-pic.jpg";
import addPhotoIcon from "../icons/add-photo-icon.svg";
import closeButton from "../icons/close-button.svg";
import "../styles/createpost.css";
import {addDoc, collection, setDoc,} from "firebase/firestore";
import {ref, getDownloadURL, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

const CreatePost = ({close, userData, db, user, storage}) => {

    const [postContent, setPostContent] = useState("");
    const [mediaFile, setMediaFile] = useState(null);
    const [mediaURL, setMediaURL] = useState(null);
    const mediaFileRef = useRef(null);

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
            media: mediaURL,
        });
    }

    const handleMediaSelection = (e) => {
        setMediaFile(e.target.files[0]);
    }

    const handleMediaClick = (e) => {
        mediaFileRef.current.click();
    }

    const uploadMedia = async (e) => {
        if (mediaFile === null) {
            return;
        }
        const mediaRef = ref(storage, `users/${userData.id}/mediaPosts/${mediaFile.name + v4()}`);
        const snapShot = await uploadBytes(mediaRef, mediaFile);
        const url = await getDownloadURL(snapShot.ref);
        setMediaURL(url);
        await addDoc(collection(db, "media"), {
            mediaURL: url,
            timestamp: new Date(),
            belongsTo: userData.id,
        })
    }

    useEffect(() => {
        uploadMedia();
    }, [mediaFile]);

    return (
        <>
            <div className={`create-post-container ${mediaURL ? "has-media" : ""}`}>
                <div className="create-post-header">
                    <h4 className="create-post-title">Create post</h4>
                    <img onClick={close} className="close-button" src={closeButton}></img>
                </div>
                <div className="create-post-data">
                    <img className="header-button profile" src={userData.profilePicURL}></img>
                    <div className="create-post-user">{userData.firstName} {userData.lastName}</div>
                </div>
                <form id="create-post-form" onSubmit={handlePost}>
                    <textarea className="create-post-content" onChange={handleChange} value={postContent} placeholder={`What's on your mind, ${userData.firstName}?`}></textarea>
                    {mediaURL && (
                        <div className="media">
                            <img alt="User uploaded media" src={mediaURL}></img>
                        </div>
                    )}
                    <input hidden type="file" ref={mediaFileRef} onChange={handleMediaSelection}></input>
                </form>
                <div className="create-post-options">
                        <ul>
                            <li onClick={handleMediaClick}><img className="add-photo-icon" src={addPhotoIcon}></img>Photo/video</li>
                        </ul>
                </div>
                <button type="submit" form="create-post-form" className="post-button">Post</button>
            </div>
            <div className="overlay"></div>
        </>
    )
}

export default CreatePost;