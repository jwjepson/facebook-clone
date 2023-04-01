import React, {useState} from "react";
import SideNav from "./SideNav";
import StatusCreator from "./StatusCreator";
import Status from "./Status";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import CreatePost from "./CreatePost";
import "../styles/home.css";
import Header from "./Header";

const Home = ({signOut, userData}) => {
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
            <LeftSideBar userData={userData} signOut={signOut}/>
            <div className="timeline">
                <StatusCreator userData={userData} open={toggleCreatePost}/>
                <Status userData={userData}/>
            </div>
            <RightSideBar/>
        </div>
        </>
    )
}

export default Home;