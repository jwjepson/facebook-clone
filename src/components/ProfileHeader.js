import React, { useEffect, useState } from "react";
import profilePic from "../images/default-profile-pic.jpg";
import "../styles/profileheader.css";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const ProfileHeader = ({userData , user, sendFriendRequest, currentUserData, confirmRequest}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const isFriendRequestSent = userData.friendRequests.includes(user.uid);

    const tabs = ["posts", "about", "friends", "photos", "videos"];

    let {userId} = useParams();

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        switch(tabIndex) {
            case 0:
                return navigate(`/${userId}`);
            case 1: 
                return navigate(`/${userId}/about`);
            case 2: 
                return navigate(`/${userId}/friends`);
            case 3:
                return navigate(`/${userId}/photos`);
            case 4: 
                return navigate(`/${userId}/videos`);
            default:
                return navigate(`/${userId}`);
        }
    }

    const getActiveTab = (pathname) => {
        switch(pathname) {
            case `/${userId}/about`:
                return 1;
            case `/${userId}/friends`:
            case `/${userId}/friends/requests`:
                return 2;
            case `/${userId}/photos`:
                return 3;
            case `/${userId}/videos`:
                return 4;
            default:
                return 0;
        }
    }

    const initialActiveTab = getActiveTab(location.pathname);
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    useEffect(() => {
        const initialActiveTab = getActiveTab(location.pathname);
        setActiveTab(initialActiveTab);
    }, [location.pathname]);
   
    return (
        <>
        <div className="profile-header-container">
            <div className="profile-cover"></div>
                <div className="profile-header-data">
                    <div className="profile-header-middle-section">
                        <div className="profile-header-left-data">
                            <img className="profile-header-picture" src={profilePic}></img>
                            <div className="profile-data">
                                <h1 className="profile-username">{userData.firstName} {userData.lastName}</h1>
                                <a className="profile-friend-count">
                                    {userData.friends.length === 1 ? (
                                        `${userData.friends.length} friend`
                                    ) : (
                                        `${userData.friends.length} friends`
                                    )}
                                </a>
                            </div>
                        </div>
                        <div className="profile-actions">
                            {currentUserData.friends.includes(userData.id) && (
                                <button type="button">Friends</button>
                            )}
                            {!currentUserData.friends.includes(userData.id) && userData.id !== user.uid && !currentUserData.friendRequests.includes(userData.id) && (
                            <button onClick={sendFriendRequest} data-user={userData.id} type="button">
                                {isFriendRequestSent ? "Requested" : "Add Friend"}
                                </button>
                            )}
                            {currentUserData.friendRequests.includes(userData.id) && (
                                <button onClick={sendFriendRequest} data-user={userData.id} type="button">Respond</button>
                            )}
                            {userData.id === user.uid && (
                                <button type="button">Edit Profile</button>
                            )}
                            {userData.id !== user.uid && (
                                <button type="button">Message</button>
                            )}
                        </div>
                    </div>
                    {currentUserData.friendRequests.includes(userData.id) && !userData.friends.includes(user.uid) && (
                        <div className="friend-request-container profile">
                            <h4>{userData.firstName} sent you a friend request</h4>
                            <div className="friend-request-container-options">
                                <button onClick={confirmRequest} data-id={userData.id} className="confirm-button" type="button">Confirm request</button>
                                <button className="delete-button" type="button">Delete request</button>
                            </div>
                        </div>
                    )}
                    <div className="profile-navigation">
                        <ul>
                            {tabs.map((tab, index) => (
                                <li key={index} onClick={() => handleTabClick(index)} className={`profile-nav ${activeTab === index ? "active" : ""}`}>{tab}</li>
                            ))}
                        </ul>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ProfileHeader