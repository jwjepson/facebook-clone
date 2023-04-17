import React, {useEffect, useState} from "react";
import "../styles/header.css";
import logo from "../icons/fb-clone-logo.png";
import notificationIcon from "../icons/notification-icon.svg";
import chatIcon from "../icons/chat-icon.svg";
import Notifications from "./Notifications";
import defaultProfile from "../images/default-profile-pic.jpg";
import Search from "./Search";
import { Link } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";

const Header = ({user, db, userData, updateUserData}) => {
    const [notificationsDisplay, setnotificationsDisplay] = useState(false);
    const [searchBarDisplay, setSearchBarDisplay] = useState(false);

    const toggleNotificationsDisplay = async () => {
        setnotificationsDisplay(!notificationsDisplay);
        if (userData.notificationCount > 0) {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            const updatedUserData = {
                ...userData,
                notificationCount: 0,
            }
            updateUserData(updatedUserData);
            await updateDoc(docRef, {
                notificationCount: 0,
            })
        }
    }

    const toggleSearchBarDisplay = () => {
        setSearchBarDisplay(!searchBarDisplay);
    }

    return (
        <>
        {userData && notificationsDisplay && (
            <Notifications toggleNotificationsDisplay={toggleNotificationsDisplay} user={user} db={db} userData={userData}/>
        )}
        {searchBarDisplay && (
            <Search db={db} toggleSearchBarDisplay={toggleSearchBarDisplay}/>
        )}
        <div className="header">
            <div className="left-info">
                <Link to="/">
                    <img className="logo-small" src={logo} alt="logo"></img>
                </Link>
                <input onClick={toggleSearchBarDisplay} className="search-box" placeholder="Search Facebook Clone" autoComplete="off" type="search" name="search"></input>
            </div>
            <div className="right-info">
                <button className="header-button" type="button" name="chat-button"><img src={chatIcon}></img></button>
                <button onClick={toggleNotificationsDisplay} className="header-button notify" type="button" name="notification-button"><img src={notificationIcon}></img>{userData.notificationCount > 0 && (<div className="badge">{userData.notificationCount}</div>)}</button>
                <Link to={`/${user.uid}`}>
                    <button className="header-button profile" type="button" name="profile-button"><img src={userData.profilePicURL}></img></button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Header;