import React from "react";
import "../styles/photoslistsmall.css";
import profilePic from "../images/default-profile-pic.jpg";

const Photos = () => {
    return (
        <div className="photos-container">
            <div className="photos-container-header">
                <h4>Photos</h4>
                <a className="see-all-photos">See all photos</a>
            </div>
            <div className="photos-container-content">
                <div className="photos-grid">
                    <div className="thumbnail">
                        <img className="photo" src={profilePic}></img>
                    </div>
                    <div className="thumbnail">
                        <img className="photo" src={profilePic}></img>
                    </div><div className="thumbnail">
                        <img className="photo" src={profilePic}></img>
                    </div><div className="thumbnail">
                        <img className="photo" src={profilePic}></img>
                    </div><div className="thumbnail">
                        <img className="photo" src={profilePic}></img>
                    </div><div className="thumbnail">
                        <img className="photo" src={profilePic}></img>
                    </div><div className="thumbnail">
                        <img className="photo" src={profilePic}></img>
                    </div><div className="thumbnail">
                        <img className="photo" src={profilePic}></img>
                    </div><div className="thumbnail">
                        <img className="photo" src={profilePic}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photos;