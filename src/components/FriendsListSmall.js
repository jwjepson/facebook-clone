import React, { useEffect, useState} from "react";
import "../styles/friendslistsmall.css";
import profilePic from "../images/default-profile-pic.jpg";
import { collection, query, where, getDocs, limit } from "firebase/firestore";

const FriendsListSmall = ({userData, db}) => {

    const [friendsData, setFriendsData] = useState([]);

    useEffect(() => {
        const getFriendsData = async () => {
            const q = query(collection(db, "users"), where("id", "in", userData.friends), limit(9));
            const querySnapshot = await getDocs(q);
            const friendsData = querySnapshot.docs.map((doc) => doc.data());
            setFriendsData(friendsData);
        }
        getFriendsData();
    }, [userData.friends]);

    return (
        <div className="friends-list-container small">
            <div className="friends-list-container-header">
                <h4>Friends</h4>
                <a className="see-all-button friends">See all friends</a>
            </div>
            <span>
                {userData.friends.length === 1 ? (
                    `${userData.friends.length} friend`
                ) : (
                    `${userData.friends.length} friends`
                )}
            </span>
            <div className="friends-list-container-content">
                <div className="friends-list-grid">
                    {friendsData.map((friend) => (
                        <div className="friend">
                            <div className="thumbnail friend">
                                <img className="photo" src={profilePic}></img>
                            </div>
                            <h4 className="friend-name">{friend.firstName} {friend.lastName}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FriendsListSmall;