import React, {useState} from "react"
import "../styles/login.css";
import Signup from "./Signup";

const Login = () => {
    const [signUpDisplay, setsignUpDisplay] = useState(false);

    const toggleSignUp = () => {
        setsignUpDisplay(!signUpDisplay);
    }
    return (
        <>
        {signUpDisplay && (
            <Signup close={toggleSignUp}/>
        )}
        <div className={`login-page-container ${signUpDisplay ? "overlay" : ""}`}>
            <div className="title-info">
                <h1 className="facebook-title">facebook</h1>
                <h2 className="facebook-description">Connect with friends and the world around you on Facebook.</h2>
            </div>
            <div className="login-form-container">
                <div>
                    <form>
                        <input className="login-input" type="email" name="email" id="email" autocomplete="off" placeholder="Email"></input>
                        <input className="login-input" type="password" name="password" id="password" placeholder="Password"></input>
                        <button className="login-button" type="submit">Log In</button>
                    </form>
                    <a className="forgot-password">Forgot password?</a>
                </div>
                <button onClick={toggleSignUp} className="create-account-button" type="button">Create new account</button>
            </div>
        </div>
        </>
    )
}

export default Login;