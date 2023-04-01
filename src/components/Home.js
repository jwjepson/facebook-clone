import React, {useState} from "react";
import SideNav from "./SideNav";
import StatusCreator from "./StatusCreator";
import Status from "./Status";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import CreatePost from "./CreatePost";
import "../styles/home.css";
import Header from "./Header";

const Home = (props) => {
    const [createPostDisplay, setcreatePostDisplay] = useState(false);

    const toggleCreatePost = () => {
        setcreatePostDisplay(!createPostDisplay);
    }

    return (
        <>
        <Header/>
        {createPostDisplay && (
            <CreatePost close={toggleCreatePost}/>
        )}
        <div className={`home-page ${createPostDisplay ? "overlay" : ""}`}>
            <LeftSideBar signOut={props.signOut}/>
            <div className="timeline">
                <StatusCreator open={toggleCreatePost}/>
                <Status/>
            </div>
            <RightSideBar/>
        </div>
        </>
    )
}

export default Home;