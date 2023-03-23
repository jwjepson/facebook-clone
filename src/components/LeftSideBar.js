import React from "react";
import SideNav from "./SideNav";
import Shortcuts from "./Shortcuts";
import "../styles/sidebars.css";

const LeftSideBar = () => {
    return (
        <div className="left-sidebar">
            <SideNav/>
            <Shortcuts/>
        </div>
    )
}

export default LeftSideBar;
