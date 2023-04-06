import React from "react";
import "../styles/intro.css";
import {checkPermission} from "../helpers/checkPermission";

const Intro = ({user, userData}) => {
    return (
        <div className="intro-container">
            <div className="intro-title">
                <h4>Intro</h4>
            </div>
            <div className="intro-actions">
                {checkPermission(user, userData) && (
                    <>
                        <button type="button" className="intro-buttons">Add bio</button>
                        <button type="button" className="intro-buttons">Edit details</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Intro;