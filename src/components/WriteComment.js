import React, {useState} from "react";
import "../styles/writecomment.css";
import profilePic from "../images/default-profile-pic.jpg";
import { collection, addDoc } from "firebase/firestore";

const WriteComment = ({db, postData, user, userData, currentUserData}) => {
    const [comment, setComment] = useState("");

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const addComment = async (e) => {
        e.preventDefault();
        const postId = e.target.getAttribute("data-postid");
        await addDoc(collection(db, "comments"), {
            postId: postId,
            content: comment,
            timestamp: new Date(),
            postedBy: {
                userId: user.uid,
                firstName: currentUserData.firstName,
                lastName: currentUserData.lastName,
            }
        });
        setComment("");
    }

    return (
        <div className="write-comment-container">
            <img src={profilePic} className="write-comment-avatar"></img>
            <form onSubmit={addComment} data-postid={postData.id}>
                <input className="write-comment-input" autoComplete="off" onChange={handleChange} value={comment} name="write-comment" placeholder="Write a comment..." type="text"></input>
            </form>
        </div>
    )
}

export default WriteComment;