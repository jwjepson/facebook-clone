import React, {useState, useEffect} from "react";
import PostsPage from "./PostsPage";
import { useParams, Routes, Route } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import FriendsPage from "./FriendsPage";
import VideosPage from "./VideosPage";
import {doc, getDoc} from "firebase/firestore";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";

const Profile = ({user, db, userData}) => {

    const [profileData, setProfileData] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    let {userId} = useParams();

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

    return (
        <>
        <Header db={db} user={user}/>
        <ProfileHeader user={user} userData={profileData}/>
        <Routes>
            <Route path="/" element={<PostsPage user={user} db={db} userData={profileData} />}/>
            <Route path="/about" element={userData ? <AboutPage db={db} user={user} userData={profileData}/> : <BeatLoader/>}/>
            <Route path="/friends" element={userData ? <FriendsPage user={user} db={db} userData={profileData}/> : <BeatLoader/>}/>
            <Route path="/photos" element={userData ? <PhotosPage user={user} userData={profileData}/> : <BeatLoader/>}/>
            <Route path="/videos" element={userData ? <VideosPage user={user} userData={profileData}/> : <BeatLoader/>}/>
        </Routes>
        </>
    )
}

export default Profile;