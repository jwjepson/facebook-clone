import React from "react";
import SideNav from "./SideNav";
import StatusCreator from "./StatusCreator";
import Status from "./Status";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import "../styles/home.css";

const Home = () => {
    return (
        <div className="home-page">
            <LeftSideBar/>
            <div className="timeline">
                <StatusCreator/>
                <Status/>
                <Status/>
            </div>
            <RightSideBar/>
        </div>
    )
}

export default Home;