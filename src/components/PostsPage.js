import React, { useEffect, useState } from "react";
import PhotosListSmall from "./PhotosListSmall";
import StatusCreator from "./StatusCreator";
import FriendsListSmall from "./FriendsListSmall";
import Status from "./Status";
import Intro from "./Intro";
import ProfileHeader from "./ProfileHeader";
import Header from "./Header";
import "../styles/profilecontent.css";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

const PostsPage = ({user, userData, db}) => {

    const [profileData, setProfileData] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    let {userId} = useParams();

    useEffect(() => {
        const getProfileData = async () => {
            const docRef = doc(db, "users", userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProfileData(docSnap.data());
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

    return (
        <>
            <Header user={user}/>
            <ProfileHeader userData={profileData}/>
            <div className="profile-content-container">
                <div className="profile-home-content">
                    <div className="profile-left-sidebar">
                        <Intro/>
                        <PhotosListSmall/>
                        <FriendsListSmall/>
                    </div>
                    <div className="profile-timeline">
                        <StatusCreator userData={profileData}/>
                        <Status userData={profileData}/>
                        <Status userData={profileData}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage;