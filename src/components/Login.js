import React from "react"
import "../styles/login.css";

const Login = () => {
    return (
        <div className="login-page-container">
            <div className="title-info">
                <h1>Facebook</h1>
                <h2>Connect with friends and the world around you on Facebook.</h2>
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
                <button className="create-account-button" type="button">Create new account</button>
            </div>
        </div>
    )
}

export default Login;