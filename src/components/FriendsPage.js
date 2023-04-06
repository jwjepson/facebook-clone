import React from "react";
import FriendsListFull from "./FriendsListFull";

const FriendsPage = ({userData, user, db}) => {
    return (
        <>
        <div className="profile-content-container">
            <FriendsListFull userData={userData} db={db}/>
        </div>
        </>
    )
}

export default FriendsPage