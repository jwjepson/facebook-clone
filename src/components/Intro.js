import React from "react";
import "../styles/intro.css";

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-title">
                <h4>Intro</h4>
            </div>
            <div className="intro-actions">
                <button type="button" className="intro-buttons">Add bio</button>
                <button type="button" className="intro-buttons">Edit details</button>
            </div>
        </div>
    )
}

export default Intro;