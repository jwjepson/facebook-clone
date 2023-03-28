import React from "react";
import "../styles/friendslistsmall.css";
import profilePic from "../images/default-profile-pic.jpg";

const FriendsListSmall = () => {
    return (
        <div className="friends-list-container small">
            <div className="friends-list-container-header">
                <h4>Friends</h4>
                <a className="see-all-button friends">See all friends</a>
            </div>
            <span>500 friends</span>
            <div className="friends-list-container-content">
                <div className="friends-list-grid">
                    <div className="friend">
                        <div className="thumbnail friend">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4 className="friend-name">User Name</h4>
                    </div>
                    <div className="friend">
                        <div className="thumbnail friend">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4 className="friend-name">User Name</h4>
                    </div>
                    <div className="friend">
                        <div className="thumbnail friend">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4 className="friend-name">User Name</h4>
                    </div>
                    <div className="friend">
                        <div className="thumbnail friend">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4 className="friend-name">User Name</h4>
                    </div>
                    <div className="friend">
                        <div className="thumbnail friend">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4 className="friend-name">User Name</h4>
                    </div>
                    <div className="friend">
                        <div className="thumbnail friend">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4 className="friend-name">User Name</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsListSmall;