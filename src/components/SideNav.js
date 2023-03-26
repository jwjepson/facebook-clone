import React from "react";
import defaultProfile from "../images/default-profile-pic.jpg";
import friendsIcon from "../icons/friends-icon.svg";
import groupsIcon from "../icons/groups-icon.svg";
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="sidenav-container">
            <ul>
                <Link to="/username">
                    <li className="sidenav-item"><img className="sidenav-icons"src={defaultProfile}></img>Username</li>
                </Link>
                <li className="sidenav-item"><img className="sidenav-icons"src={friendsIcon}></img>Friends</li>
                <li className="sidenav-item"><img className="sidenav-icons"src={groupsIcon}></img>Groups</li>
            </ul>
        </div>
    )
}

export default SideNav;