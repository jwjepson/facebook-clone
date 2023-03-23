import React from "react";
import "../styles/sidenav.css";
import defaultProfile from "../images/default-profile-pic.jpg";
import friendsIcon from "../icons/friends-icon.svg";
import groupsIcon from "../icons/groups-icon.svg";

const SideNav = () => {
    return (
        <div className="sidenav-container">
            <ul>
                <li><img className="sidenav-icons"src={defaultProfile}></img>Username</li>
                <li><img className="sidenav-icons"src={friendsIcon}></img>Friends</li>
                <li><img className="sidenav-icons"src={groupsIcon}></img>Groups</li>
            </ul>
        </div>
    )
}

export default SideNav;