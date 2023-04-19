import React, { useState } from "react";
import "../styles/signup.css";
import closeButton from "../icons/close-button.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import ErrorIcon from "../icons/error-icon";

const Signup = ({ setUser, auth, close, db}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

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

    const handleChange = (e) => {
        const { name, value} = e.target;
        switch(name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "first-name":
                setFirstName(value);
                break;
            case "last-name":
                setLastName(value);
                break;
            case "month":
                setMonth(value);
                break;
            case "day":
                setDay(value);
                break;
            case "year":
                setYear(value);
                break;
        }
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const signUp = async (e) => {
        e.preventDefault();
        if (validateData()) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                setUser(userCredential.user);
                await setDoc(doc(db, "users", userCredential.user.uid), {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    birthday: {
                        month: month,
                        day: day,
                        year: year,
                    },
                    gender: gender,
                    friends: [],
                    friendRequests: [],
                    id: userCredential.user.uid,
                    profilePicURL: "https://firebasestorage.googleapis.com/v0/b/facebook-clone-5cb68.appspot.com/o/profilePictures%2Fdefault-profile-pic.jpg?alt=media&token=ed148652-e2a5-46b6-88c2-718ec2d9460d",
                });
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    sendErrorMessage("Email is already in use. Please try again");
                }
            }
        } else {
            return;
        }
    }

    const sendErrorMessage = (message) => {
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage("");
        }, 3000);
    }

    const validateData = () => {
        if (!firstName || !lastName || !email || !password || !month || !day || !year || !gender) {
            sendErrorMessage("Please fill in all fields");
            return false;
        }
        return true;
    }

    return (
        <div className="signup-container">
            <div className="signup-heading">
                <h2>Sign Up</h2>
                <p>It's quick and easy.</p>
                <img onClick={close} className="close-button" src={closeButton}></img>
            </div>
            <form onSubmit={signUp} className="signup-form">
                <input autoComplete="off" type="text" onChange={handleChange} value={firstName} name="first-name" id="first-name" placeholder="First name"></input>
                <input autoComplete="off" type="text" onChange={handleChange} value={lastName} name="last-name" id="last-name" placeholder="Last name"></input>
                <input autoComplete="off" type="email" onChange={handleChange} value={email} name="email" id="email" placeholder="Email"></input>
                <input type="password" name="password" id="password" onChange={handleChange} value={password} placeholder="New password"></input>
                <div className="birthday-title">Birthday</div>
                <div className="birthday-select">
                    <select onChange={handleChange} name="month" value={month} id="month">
                        {months.map((month) => (
                            <option name="month" value={month} key={month}>{month}</option>
                        ))}
                    </select>
                    <select name="day" value={day} onChange={handleChange} id="day">
                        {days.map((day) => (
                            <option name="day" value={day} key={day}>{day}</option>
                        ))}
                    </select>
                    <select name="year" value={year} onChange={handleChange} id="year">
                        {years.map((year) => (
                            <option name="year" value={year} key={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="gender-title">Gender</div>
                <div className="gender-select">
                    <div className="gender-female">
                        <label htmlFor="female">Female</label>
                        <input onChange={handleGenderChange}value="female" checked={gender === "female"}type="radio" name="sex" id="female"></input>
                    </div>
                    <div className="gender-male">
                        <label htmlFor="male">Male</label>
                        <input onChange={handleGenderChange} value="male" checked={gender === "male"}type="radio" name="sex" id="male"></input>
                    </div>
                </div>
                {errorMessage && (
                    <span className="error-message signup">{errorMessage}<ErrorIcon/></span>
                )}
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