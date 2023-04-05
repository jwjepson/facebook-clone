import React, {useEffect, useState} from "react";
import SideNav from "./SideNav";
import StatusCreator from "./StatusCreator";
import Status from "./Status";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import CreatePost from "./CreatePost";
import "../styles/home.css";
import Header from "./Header";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";

const Home = ({signOut, userData, user, db}) => {
    const [createPostDisplay, setcreatePostDisplay] = useState(false);
    const [posts, setPosts] = useState([]);

    const toggleCreatePost = () => {
        setcreatePostDisplay(!createPostDisplay);
    }

    useEffect(() => {
        const getTimelinePosts = async () => {
            const q = query(collection(db, "posts"), where("postedBy", "==", user.uid), orderBy("timestamp", "desc"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const docsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPosts(docsData);
            });
            return unsubscribe;
        };

        getTimelinePosts();
    }, [user, db]);

    return (
        <>
        <Header db={db} user={user}/>
        {createPostDisplay && (
            <CreatePost user={user} db={db} userData={userData} close={toggleCreatePost}/>
        )}
        <div className={`home-page ${createPostDisplay ? "overlay" : ""}`}>
            <LeftSideBar user={user} userData={userData} signOut={signOut}/>
            <div className="timeline">
                <StatusCreator userData={userData} open={toggleCreatePost}/>
                {posts.map((post) => (
                            <Status key={post.id} user={user} db={db} userData={userData} postData={post}/>
                ))}
            </div>
            <RightSideBar/>
        </div>
        </>
    )
}

export default Home;