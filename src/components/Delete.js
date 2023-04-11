import React from "react";
import deleteIcon from "../icons/close-button.svg";
import { doc, where, getDocs, query, collection, writeBatch } from "firebase/firestore";

const Delete = ({type, id, db, className}) => {

    const handleDelete = async () => {
        const batch = writeBatch(db);

        if (type === "posts") {
            const commentQuery = query(collection(db, "comments"), where("postId", "==", id));
            const commentSnapshot = await getDocs(commentQuery);

            commentSnapshot.forEach((document) => {
                batch.delete(doc(db, "comments", document.id));
            });
        }
        
        batch.delete(doc(db, type, id));

        await batch.commit();
    }

    return (
        <>
            <button onClick={handleDelete} className={`delete-comment-button ${className}`} type="button" name="close-button"><img className="delete-comment-icon" src={deleteIcon}></img></button>
        </>
    )
}

export default Delete;