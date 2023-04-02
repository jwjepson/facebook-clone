import React from "react";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";
import FriendsListFull from "./FriendsListFull";

const FriendsPage = ({userData}) => {
    return (
        <>
        <Header/>
        <ProfileHeader userData={userData}/>
        <div className="profile-content-container">
            <FriendsListFull/>
        </div>
        </>
    )
}

export default FriendsPage