import React, {useState, useEffect} from "react";
import PostsPage from "./PostsPage";
import { useParams, Routes, Route } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import FriendsPage from "./FriendsPage";
import VideosPage from "./VideosPage";
import {arrayRemove, arrayUnion, doc, getDoc, updateDoc, writeBatch, FieldValue} from "firebase/firestore";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";
import FriendRequests from "./FriendRequests";
import {sendNotification} from "../helpers/sendNotification";

const Profile = ({user, db, userData, updateUserData, storage}) => {

    const [profileData, setProfileData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [friendRequestConfirmed, setFriendRequestConfirmed] = useState(false);

    let {userId} = useParams();

    const sendFriendRequest = async (e) => {
        const userIdRequest = e.target.getAttribute("data-user");
        const docRef = doc(db, "users", userIdRequest);
        const docSnap = await getDoc(docRef);
        if (!docSnap.data().friendRequests.includes(user.uid)) {
            setProfileData(prevData => ({
                ...prevData,
                friendRequests: [...prevData.friendRequests, user.uid],           
            }))
            await updateDoc(docRef, {
                friendRequests: arrayUnion(user.uid),
            })
            sendNotification("friendRequest", userData, userIdRequest, db)
        } else {
            setProfileData(prevData => ({
                ...prevData,
                friendRequests: prevData.friendRequests.filter(id => id !== user.uid)
            }))
            await updateDoc(docRef, {
                friendRequests: arrayRemove(user.uid)
            })
        }
    }

    const confirmRequest = async (e) => {
        let userIdRequest = e.target.getAttribute("data-id");
        const requesterRef = doc(db, "users", userIdRequest);
        const currentUserRef = doc(db, "users", user.uid);

        // User is confirming request from requested users profile
        if (userId === userIdRequest) {

            let updatedProfileData = {
                ...profileData,
                friends: [...profileData.friends, user.uid]
            }
            setProfileData(updatedProfileData);

        // User is confirming request from their own profile
        } else {

            let updatedProfileData = {
                ...profileData,
                friendRequests: profileData.friendRequests.filter((id) => id !== userIdRequest),
                friends: [...profileData.friends, userIdRequest]
            };
                setProfileData(updatedProfileData);

        }

            let updatedUserData = {
                ...userData,
                friendRequests: userData.friendRequests.filter((id) => id !== userIdRequest),
                friends: [...userData.friends, userIdRequest]
            };
                updateUserData(updatedUserData);
       
        const batch = writeBatch(db);

        batch.update(requesterRef, {
            friends: arrayUnion(user.uid),
        })

        batch.update(currentUserRef, {
            friendRequests: arrayRemove(userIdRequest),
            friends: arrayUnion(userIdRequest)
        })

        await batch.commit();
        setFriendRequestConfirmed(true);

}

    useEffect(() => {
        const getProfileData = async () => {
            const docRef = doc(db, "users", userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProfileData({id: docSnap.id, ...docSnap.data()});
                setisLoading(false);
            } else {
                console.log("Profile does not exist");
            }
        }

        getProfileData();
    }, [userId, db]);

    if (isLoading) {
        return null;
    }

    console.log(profileData);

    return (
        <>
        <Header userData={userData} db={db} user={user}/>
        <ProfileHeader db={db} storage={storage} currentUserData={userData} sendFriendRequest={sendFriendRequest} confirmRequest={confirmRequest} user={user} userData={profileData}/>
        <Routes>
            <Route path="/" element={<PostsPage user={user} db={db} friendRequestConfirmed={friendRequestConfirmed} currentUserData={userData} userData={profileData} />}/>
            <Route path="/about" element={profileData ? <AboutPage db={db} user={user} userData={profileData}/> : <BeatLoader/>}/>
            <Route path="/friends" element={profileData ? <FriendsPage user={user} db={db} userData={profileData}/> : <BeatLoader/>}/>
            <Route path="/photos" element={profileData ? <PhotosPage user={user} userData={profileData}/> : <BeatLoader/>}/>
            <Route path="/videos" element={profileData ? <VideosPage user={user} userData={profileData}/> : <BeatLoader/>}/>
            <Route path="/friends/requests" element={profileData ? <FriendRequests confirmRequest={confirmRequest} db={db} userData={profileData} user={user}/> : <BeatLoader/>}/>
        </Routes>
        </>
    )
}

export default Profile;