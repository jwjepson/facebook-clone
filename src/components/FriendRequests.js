import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../styles/friendrequests.css";
import profilePic from "../images/default-profile-pic.jpg";
import { collection, query, where, getDocs, doc, getDoc, updateDoc, arrayRemove, arrayUnion, writeBatch } from "firebase/firestore";

const FriendRequests = ({userData, user, db, onFriendRequestChange}) => {

    const [friendRequestData, setFriendRequestData] = useState([]);

    const confirmRequest = async (e) => {
            const userId = e.target.getAttribute("data-id");
            const requesterRef = doc(db, "users", userId);
            const currentUserRef = doc(db, "users", user.uid);

            const updatedUserData = {
                ...userData,
                friendRequests: userData.friendRequests.filter((id) => id !== userId),
                friends: [...userData.friends, userId]
            };
            
            onFriendRequestChange(updatedUserData);
           
            const batch = writeBatch(db);

            batch.update(requesterRef, {
                friends: arrayUnion(user.uid),
            })

            batch.update(currentUserRef, {
                friendRequests: arrayRemove(userId),
                friends: arrayUnion(userId)
            })

            await batch.commit();

    }

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

    console.log(userData);

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