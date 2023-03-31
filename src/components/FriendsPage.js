import React from "react";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";
import FriendsListFull from "./FriendsListFull";

const FriendsPage = () => {
    return (
        <>
        <Header/>
        <ProfileHeader/>
        <div className="profile-content-container">
            <FriendsListFull/>
        </div>
        </>
    )
}

export default FriendsPage