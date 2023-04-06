import React from "react";
import "../styles/photoslistsmall.css";
import profilePic from "../images/default-profile-pic.jpg";
import { checkPermission } from "../helpers/checkPermission";

const Photos = ({user, userData}) => {
    return (
        <div className="photos-container">
            <div className="photos-container-header">
                <h4>Photos</h4>
                <a className="see-all-button photos">See all photos</a>
            </div>
            <div className="photos-container-content">
                <div className="photos-grid">
                    {checkPermission(user, userData) && (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Photos;