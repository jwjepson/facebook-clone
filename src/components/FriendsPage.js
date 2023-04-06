import React from "react";
import FriendsListFull from "./FriendsListFull";
import { checkPermission } from "../helpers/checkPermission";

const FriendsPage = ({userData, user, db}) => {
    return (
        <>
        <div className="profile-content-container">
            <FriendsListFull user={user} userData={userData} db={db}/>
        </div>
        </>
    )
}

export default FriendsPage