import React, {useEffect, useState} from "react";
import likeIcon from "../icons/like-icon.svg";
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

const Like = ({postData, db, user}) => {

    const handleLike = async (e) => {
        let postId = e.currentTarget.getAttribute("data-postid");
        const docRef = doc(db, "posts", postId);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                if ((docSnap.data().likes).includes(user.uid)) {
                    await updateDoc(docRef, {
                        likes: arrayRemove(user.uid)
                    });
                } else {
                    await updateDoc(docRef, {
                        likes: arrayUnion(user.uid)
                    })
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
            <button onClick={handleLike} type="button" data-postid={postData.id} name="like-button"><img className="like-icon" src={likeIcon}></img>Like</button>
        </div>
    )
}

export default Like;