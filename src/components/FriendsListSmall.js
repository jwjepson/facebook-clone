import React, { useEffect, useState} from "react";
import "../styles/friendslistsmall.css";
import profilePic from "../images/default-profile-pic.jpg";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { checkPermission } from "../helpers/checkPermission";

const FriendsListSmall = ({user, userData, db}) => {

    const [friendsData, setFriendsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getFriendsData = async () => {
            try {
                const q = query(collection(db, "users"), where("id", "in", userData.friends), limit(9));
                const querySnapshot = await getDocs(q);
                const friendsData = querySnapshot.docs.map((doc) => doc.data());
                setFriendsData(friendsData);
            } catch {
                setFriendsData([]);
            }
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
                {checkPermission(user, userData) && (
                    <div className="friends-list-grid">
                        {friendsData.map((friend) => (
                            <div className="friend">
                                <Link to={`/${friend.id}`}>
                                    <div className="thumbnail friend">
                                        <img className="photo" src={profilePic}></img>
                                    </div>
                                </Link>
                                <h4 className="friend-name">
                                    <Link to={`/${friend.id}`}>
                                        {friend.firstName} {friend.lastName}
                                    </Link>
                                </h4>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FriendsListSmall;