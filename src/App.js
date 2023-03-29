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
import Intro from "./components/Intro";
import AboutPage from "./components/AboutPage";
import PostsPage from "./components/PostsPage";
import FriendsPage from "./components/FriendsPage";
import PhotosPage from "./components/PhotosPage";
import VideosPage from "./components/VideosPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";

const App = () => {

  const isLoggedIn = true;
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home/> : <Login/>}/>
        <Route path="/username" element={<PostsPage/>}/>
        <Route path="/username/about" element={<AboutPage/>}/>
        <Route path="/username/friends" element={<FriendsPage/>}/>
        <Route path="/username/photos" element={<PhotosPage/>}/>
        <Route path="/username/videos" element={<VideosPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
