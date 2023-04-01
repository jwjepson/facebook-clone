import React from "react";
import SideNav from "./SideNav";
import Shortcuts from "./Shortcuts";
import "../styles/sidebars.css";

const LeftSideBar = (props) => {
    return (
        <div className="left-sidebar">
            <SideNav signOut={props.signOut}/>
            <Shortcuts/>
        </div>
    )
}

export default LeftSideBar;
