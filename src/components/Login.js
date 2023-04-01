import React, {useState} from "react"
import "../styles/login.css";
import Signup from "./Signup";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setUser, auth }) => {
    const [signUpDisplay, setsignUpDisplay] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        const { name, value} = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user);
        } catch (error) {
            console.log(error);
        }
    }

    const toggleSignUp = () => {
        setsignUpDisplay(!signUpDisplay);
    }
    return (
        <>
        {signUpDisplay && (
            <Signup setUser={setUser} auth={auth} close={toggleSignUp}/>
        )}
        <div className={`login-page-container ${signUpDisplay ? "overlay" : ""}`}>
            <div className="title-info">
                <h1 className="facebook-title">facebook clone</h1>
                <h2 className="facebook-description">Connect with friends and the world around you on Facebook.</h2>
            </div>
            <div className="login-form-container">
                <div>
                    <form onSubmit={handleLogin}>
                        <input className="login-input" onChange={handleChange} value={email} type="email" name="email" id="email" autoComplete="off" placeholder="Email"></input>
                        <input className="login-input" onChange={handleChange} value={password} type="password" name="password" id="password" placeholder="Password"></input>
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