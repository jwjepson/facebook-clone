import React from "react";
import "../styles/signup.css";
import closeButton from "../icons/close-button.svg";

const Signup = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = [];
    const years = [];

    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= (currentYear - 120); i--) {
        years.push(i);
    }

    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }

    return (
        <div className="signup-container">
            <div className="signup-heading">
                <h2>Sign Up</h2>
                <p>It's quick and easy.</p>
                <img onClick={props.close} className="close-button" src={closeButton}></img>
            </div>
            <form className="signup-form">
                <input autoComplete="off" type="text" name="first-name" id="first-name" placeholder="First name"></input>
                <input autoComplete="off" type="text" name="last-name" id="last-name" placeholder="Last name"></input>
                <input autoComplete="off" type="email" name="email" id="email" placeholder="Email"></input>
                <input type="password" name="password" id="password" placeholder="New password"></input>
                <div className="birthday-title">Birthday</div>
                <div className="birthday-select">
                    <select id="month">
                        {months.map((month) => (
                            <option key={month}>{month}</option>
                        ))}
                    </select>
                    <select id="day">
                        {days.map((day) => (
                            <option key={day}>{day}</option>
                        ))}
                    </select>
                    <select id="year">
                        {years.map((year) => (
                            <option key={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="gender-title">Gender</div>
                <div className="gender-select">
                    <div className="gender-female">
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="sex" id="female" value="female"></input>
                    </div>
                    <div className="gender-male">
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="sex" id="male" value="male"></input>
                    </div>
                </div>
                <p className="terms">By clicking Sign Up, you understand that this is a Facebook clone, and is not the real Facebook. You understand
                that this application was created soley for learning purposes and does not intend to represent Facebook.</p>
                <div className="signup-button-container">
                    <button type="submit" name="signup" className="signup-button">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;