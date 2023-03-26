import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Status from "./components/Status";
import SideNav from "./components/SideNav";
import WriteComment from "./components/WriteComment";
import StatusCreator from "./components/StatusCreator";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Notifications from "./components/Notifications";
import ProfileHeader from "./components/ProfileHeader";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";

const App = () => {

  const isLoggedIn = true;
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home/> : <Login/>}/>
        <Route path="/username" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
