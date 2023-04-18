import React, {useEffect, useState} from "react";
import LikeIcon from "../icons/like-icon.js";
import LikeIconFilled from "../icons/like-icon-fill.js";
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import {Notification} from "../helpers/sendNotification.js";

const Like = ({postData, db, user, currentUserData}) => {

    const [isLiked, setIsLiked] = useState(postData.likes.includes(user.uid));

    const handleLike = async (e) => {
        let postId = e.currentTarget.getAttribute("data-postid");
        const docRef = doc(db, "posts", postId);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                if ((docSnap.data().likes).includes(user.uid)) {
                    setIsLiked(false);
                    await updateDoc(docRef, {
                        likes: arrayRemove(user.uid)
                    });
                } else {
                    setIsLiked(true);
                    await updateDoc(docRef, {
                        likes: arrayUnion(user.uid)
                    })
                    const notification = new Notification("like", currentUserData, postData.postedBy, db, postData);
                    await notification.send();
                }
            } else {
                console.log("no");
            }
        } catch (error) {
            console.log("Could not like Post ", error);
        }
    }

    return (
        <div className="like-button">
            <button onClick={handleLike} type="button" data-postid={postData.id} name="like-button">
                {isLiked ? <LikeIconFilled/> : <LikeIcon/>}
                Like
            </button>
        </div>
    )
}

export default Like;