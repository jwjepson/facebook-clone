import React, { useEffect, useState } from "react";
import PhotosListSmall from "./PhotosListSmall";
import StatusCreator from "./StatusCreator";
import FriendsListSmall from "./FriendsListSmall";
import Status from "./Status";
import Intro from "./Intro";
import "../styles/profilecontent.css";
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { checkPermission } from "../helpers/checkPermission";


const PostsPage = ({user, userData, db, friendRequestConfirmed, currentUserData}) => {

    let {userId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getUserPosts = async () => {
            const q = query(collection(db, "posts"), where("postedBy", "==", userId), orderBy("timestamp", "desc"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const docsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPosts(docsData);
            });
            return unsubscribe;
        };

        getUserPosts();
    }, [userId, db, friendRequestConfirmed]);

    return (
        <>
        <ScrollToTop/>
            <div className="profile-content-container">
                <div className="profile-home-content">
                    <div className="profile-left-sidebar">
                        <Intro user={user} userData={userData}/>
                        <PhotosListSmall user={user} db={db} userData={userData}/>
                        <FriendsListSmall user={user} db={db} userData={userData}/>
                    </div>
                    <div className="profile-timeline">
                        {checkPermission(user, userData) && (
                            <>
                                <StatusCreator userData={userData}/>
                                {posts.map((post) => (
                                    <Status key={post.id} user={user} currentUserData={currentUserData} db={db} userData={userData} postData={post}/>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage;