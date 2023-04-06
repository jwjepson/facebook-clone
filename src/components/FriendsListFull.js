import React, {useState, useEffect} from "react";
import "../styles/friendslistfull.css";
import profilePic from "../images/default-profile-pic.jpg";
import moreIcon from "../icons/more-icon.svg";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { Link } from "react-router-dom";
import { checkPermission } from "../helpers/checkPermission";

const FriendsListFull = ({db, userData, user}) => {

    const [friendsData, setFriendsData] = useState([]);

    useEffect(() => {
        const getFriendsData = async () => {
            try {
                const q = query(collection(db, "users"), where("id", "in", userData.friends));
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
        <div className="friends-list-container full">
            <div className="friends-list-container-header">
                <h4>Friends</h4>
                <div className="right-info friends">
                    <input placeholder="Search" type="search"></input>
                    <a>Friend requests</a>
                </div>
            </div>
            {checkPermission(user, userData) ? (
                <div className="friends-list">
                    {friendsData.map((friend) => (
                        <div className="friend full-container">
                            <div className="left-info">
                                <Link to={`/${friend.id}`}>
                                    <div className="thumbnail friend full">
                                        <img className="photo" src={profilePic}></img>
                                    </div>
                                </Link>
                                <h4>
                                    <Link to={`/${friend.id}`}>{friend.firstName} {friend.lastName} </Link>
                                </h4>
                            </div>
                            <button type="button" name="more-button"><img className="status-option-icon" src={moreIcon}></img></button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-content-message">No friends to show</div>
            )}
        </div>
    )
}

export default FriendsListFull;