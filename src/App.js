
import React, {useEffect, useState} from "react";
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
import { initializeApp } from "firebase/app";
import { BeatLoader } from "react-spinners";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const App = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyAJ1iVmgzpGtmPVITlE-22I7TKr9hm9zDs",
    authDomain: "facebook-clone-5cb68.firebaseapp.com",
    projectId: "facebook-clone-5cb68",
    storageBucket: "facebook-clone-5cb68.appspot.com",
    messagingSenderId: "821262756660",
    appId: "1:821262756660:web:684f7a5683b85c1f87d361"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const handleSignOut = async () => {
    await signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser);
      } else {
        // User is logged out
        setUser(null);
      }
      setisLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return <BeatLoader/>
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home signOut={handleSignOut}/> : <Login setUser={setUser} auth={auth}/>}/>
        <Route path="/username" element={<PostsPage/>}/>
        <Route path="/username/about" element={<AboutPage user={user}/>}/>
        <Route path="/username/friends" element={<FriendsPage/>}/>
        <Route path="/username/photos" element={<PhotosPage/>}/>
        <Route path="/username/videos" element={<VideosPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
