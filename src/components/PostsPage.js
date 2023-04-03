import React, { useEffect, useState } from "react";
import PhotosListSmall from "./PhotosListSmall";
import StatusCreator from "./StatusCreator";
import FriendsListSmall from "./FriendsListSmall";
import Status from "./Status";
import Intro from "./Intro";
import "../styles/profilecontent.css";

const PostsPage = ({user, userData, db}) => {
    return (
        <>
            <div className="profile-content-container">
                <div className="profile-home-content">
                    <div className="profile-left-sidebar">
                        <Intro/>
                        <PhotosListSmall/>
                        <FriendsListSmall/>
                    </div>
                    <div className="profile-timeline">
                        <StatusCreator userData={userData}/>
                        <Status userData={userData}/>
                        <Status userData={userData}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage;