import React, { useEffect, useState } from "react";
import PhotosListSmall from "./PhotosListSmall";
import StatusCreator from "./StatusCreator";
import FriendsListSmall from "./FriendsListSmall";
import Status from "./Status";
import Intro from "./Intro";
import "../styles/profilecontent.css";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useParams } from "react-router-dom";


const PostsPage = ({user, userData, db}) => {

    let {userId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getUserPosts = async () => {
            const q = query(collection(db, "posts"), where("postedBy", "==", userId), orderBy("timestamp", "desc"));
            const querySnapshot = await getDocs(q);
            const docsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPosts(docsData);
        }

        getUserPosts();
    }, [userId, db]);

    console.log(posts);

    return (
        <>
            <div className="profile-content-container">
                <div className="profile-home-content">
                    <div className="profile-left-sidebar">
                        <Intro/>
                        <PhotosListSmall/>
                        <FriendsListSmall/>
                    </div>
                    <div className="profile-timeline">
                        <StatusCreator userData={userData}/>
                        {posts.map((post) => (
                            <Status key={post.id} userData={userData} postData={post}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage;