import React from "react";
import FriendsListFull from "./FriendsListFull";

const FriendsPage = ({userData, user}) => {
    return (
        <>
        <div className="profile-content-container">
            <FriendsListFull/>
        </div>
        </>
    )
}

export default FriendsPage