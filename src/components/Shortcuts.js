import React from "react";
import defaultProfile from "../images/default-profile-pic.jpg";

const Shortcuts = () => {
    return (
        <div className="shortcuts-container">
            <h4 className="shortcut-header">Your shortcuts</h4>
            <div className="shortcuts">
                <ul>
                    <li><img className="shortcut-icons" src={defaultProfile}></img>Shortcut 1</li>
                    <li><img className="shortcut-icons" src={defaultProfile}></img>Shortcut 2</li>
                </ul>
            </div>
        </div>
    )
}

export default Shortcuts;