import React from "react";
import birthdayIcon from "../icons/birthday-icon.svg";

const Birthdays = () => {
    return (
        <div className="birthday-container">
            <h4 className="birthday-header">Birthdays</h4>
            <div className="birthday-data">
                <img className="birthday-icon" src={birthdayIcon}></img>
                <div className="birthdays">User and User have birthdays today.</div>
            </div>
        </div>
    )
}

export default Birthdays;