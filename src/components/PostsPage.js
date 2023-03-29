import React from "react";
import PhotosListSmall from "./PhotosListSmall";
import StatusCreator from "./StatusCreator";
import FriendsListSmall from "./FriendsListSmall";
import Status from "./Status";
import Intro from "./Intro";
import ProfileHeader from "./ProfileHeader";
import Header from "./Header";
import "../styles/profilecontent.css";

const PostsPage = () => {
    return (
        <>
            <Header/>
            <ProfileHeader/>
            <div className="profile-content-container">
                <div className="profile-home-content">
                    <div className="profile-left-sidebar">
                        <Intro/>
                        <PhotosListSmall/>
                        <FriendsListSmall/>
                    </div>
                    <div className="profile-timeline">
                        <StatusCreator/>
                        <Status/>
                        <Status/>
                        <Status/>
                        <Status/>
                        <Status/>
                        <Status/>
                        <Status/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage;