import React, {useState} from "react";
import SideNav from "./SideNav";
import StatusCreator from "./StatusCreator";
import Status from "./Status";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import CreatePost from "./CreatePost";
import "../styles/home.css";

const Home = () => {
    const [createPostDisplay, setcreatePostDisplay] = useState(false);

    const toggleCreatePost = () => {
        setcreatePostDisplay(!createPostDisplay);
    }

    return (
        <>
        {createPostDisplay && (
            <CreatePost close={toggleCreatePost}/>
        )}
        <div className={`home-page ${createPostDisplay ? "overlay" : ""}`}>
            <LeftSideBar/>
            <div className="timeline">
                <StatusCreator open={toggleCreatePost}/>
                <Status/>
                <Status/>
            </div>
            <RightSideBar/>
        </div>
        </>
    )
}

export default Home;