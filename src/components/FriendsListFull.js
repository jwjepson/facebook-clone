import React from "react";
import "../styles/friendslistfull.css";
import profilePic from "../images/default-profile-pic.jpg";
import moreIcon from "../icons/more-icon.svg";

const FriendsListFull = () => {
    return (
        <div className="friends-list-container full">
            <div className="friends-list-container-header">
                <h4>Friends</h4>
                <div className="right-info friends">
                    <input placeholder="Search" type="search"></input>
                    <a>Friend requests</a>
                </div>
            </div>
            <div className="friends-list">
                <div className="friend full-container">
                    <div className="left-info">
                        <div className="thumbnail friend full">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4>Username</h4>
                    </div>
                    <button type="button" name="more-button"><img className="status-option-icon" src={moreIcon}></img></button>
                </div>
                <div className="friend full-container">
                    <div className="left-info">
                        <div className="thumbnail friend full">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4>Username</h4>
                    </div>
                    <button type="button" name="more-button"><img className="status-option-icon" src={moreIcon}></img></button>
                </div>
                <div className="friend full-container">
                    <div className="left-info">
                        <div className="thumbnail friend full">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4>Username</h4>
                    </div>
                    <button type="button" name="more-button"><img className="status-option-icon" src={moreIcon}></img></button>
                </div>
                <div className="friend full-container">
                    <div className="left-info">
                        <div className="thumbnail friend full">
                            <img className="photo" src={profilePic}></img>
                        </div>
                        <h4>Username</h4>
                    </div>
                    <button type="button" name="more-button"><img className="status-option-icon" src={moreIcon}></img></button>
                </div>
            </div>
        </div>
    )
}

export default FriendsListFull;