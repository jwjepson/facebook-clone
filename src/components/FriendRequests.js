import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../styles/friendrequests.css";
import profilePic from "../images/default-profile-pic.jpg";
import { collection, query, where, getDocs, doc, getDoc, updateDoc, arrayRemove, arrayUnion, writeBatch } from "firebase/firestore";

const FriendRequests = ({userData, user, db, confirmRequest}) => {

    const [friendRequestData, setFriendRequestData] = useState([]);

    useEffect(() => {
        const getFriendRequestData = async () => {
            try {
                const q = query(collection(db, "users"), where("id", "in", userData.friendRequests));
                const querySnapshot = await getDocs(q);
                const requestData = querySnapshot.docs.map((doc) => doc.data());
                setFriendRequestData(requestData);
            } catch {
                setFriendRequestData([]);
            }
        }
        getFriendRequestData();
    }, [userData, db]);

    return (
        <div className="profile-content-container">
            <div className="friends-list-container full">
                <div className="friends-list-container-header">
                    <h4>Friend Requests</h4>
                    <div className="right-info friends">
                    </div>
                </div>
                <div className="friend-requests">
                    {friendRequestData.map((request) => (
                        <div className="friend-request-card">
                            <img src={profilePic}></img>
                            <div className="friend-request-content">
                                <h4>{request.firstName} {request.lastName}</h4>
                                <p>{request.friends.length} friends</p>
                                <div className="friend-request-options">
                                    <button onClick={confirmRequest} className="confirm-button" data-id={request.id} type="button">Confirm</button>
                                    <button className="delete-button" type="button">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FriendRequests