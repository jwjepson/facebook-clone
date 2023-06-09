import React from "react";
import SideNav from "./SideNav";
import Shortcuts from "./Shortcuts";
import "../styles/sidebars.css";

const LeftSideBar = ({signOut, userData, user}) => {
    return (
        <div className="left-sidebar">
            <SideNav user={user} userData={userData} signOut={signOut}/>
            <Shortcuts/>
        </div>
    )
}

export default LeftSideBar;
