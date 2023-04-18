import React, {useEffect, useState} from "react";
import "../styles/notifications.css";
import {Link} from "react-router-dom";
import {doc, updateDoc, onSnapshot, collection, query, where, orderBy, getDocs, limit} from "firebase/firestore";
import moreIcon from "../icons/more-icon.svg";
import profilePic from "../images/default-profile-pic.jpg";

const Notifications = ({user, db, userData, toggleNotificationsDisplay}) => {

    const [notifications, setNotifications] = useState([]);

    const markRead = async (notificationId) => {
        const notificationDoc = doc(db, "notifications", notificationId);
        await updateDoc(notificationDoc, {
            read: true,
        });
        toggleNotificationsDisplay()
    }

    useEffect(() => {
        const getNotifications = async () => {
            const q = query(collection(db, "notifications"), where("belongsTo", "==", user.uid), orderBy("timestamp", "desc"), limit(6));
            const querySnapshot = await getDocs(q);
            const docsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNotifications(docsData);
        };

        getNotifications();
    }, [user.uid, db]);
    

    return (
        <div className="notifications-container">
            <div className="notifications-header">
                <h4 className="notifications-title">Notifications</h4>
                <img src={moreIcon} className="more-button notifcations"></img>
            </div>
            <div className="notifications">
                <div className="see-all-notifications">
                    <h4>Most recent</h4>
                    <a className="see-all-notifications-link">See all</a>
                </div>
                <ul className="notifications-list">
                    {notifications && (
                        notifications.map((notification) => (
                            <Link to={`/${notification.src}`}>
                                <li onClick={() => markRead(notification.id)} className={`notification ${notification.read === false ? "unread" : ""}`}>
                                    <img className="notification-avatar" src={notification.picture}></img>
                                    <div className="notification-content">{notification.content}</div>
                                </li>
                            </Link>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Notifications;