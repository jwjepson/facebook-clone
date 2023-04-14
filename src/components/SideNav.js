import React from "react";
import defaultProfile from "../images/default-profile-pic.jpg";
import friendsIcon from "../icons/friends-icon.svg";
import groupsIcon from "../icons/groups-icon.svg";
import logoutIcon from "../icons/logout-icon.svg";
import { Link } from "react-router-dom";

const SideNav = ({ signOut, userData, user }) => {

    return (
        <div className="sidenav-container">
            <ul>
                <Link to={`/${user.uid}`}>
                    <li className="sidenav-item"><img className="sidenav-icons"src={userData.profilePicURL}></img>{userData.firstName} {userData.lastName}</li>
                </Link>
                <Link to={`/${user.uid}/friends`}>
                    <li className="sidenav-item"><img className="sidenav-icons"src={friendsIcon}></img>Friends</li>
                </Link>
                <li className="sidenav-item"><img className="sidenav-icons"src={groupsIcon}></img>Groups</li>
                <li onClick={signOut} className="sidenav-item"><img className="sidenav-icons"src={logoutIcon}></img>Log Out</li>
            </ul>
        </div>
    )
}

export default SideNav;