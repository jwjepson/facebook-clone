import React, {useState, useRef, useEffect} from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {addDoc, collection} from "firebase/firestore";
import { v4 } from "uuid";


const AddMedia = ({onClick, storage, handlePhotoChange, type}) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    }

    const uploadPhoto = async () => {
        if (selectedFile == null) {
            return;
        }
        const imageRef = ref(storage, `${type}/${selectedFile.name + v4()}`);
        const snapShot = await uploadBytes(imageRef, selectedFile);
        const url = await getDownloadURL(snapShot.ref);
        handlePhotoChange(url, type);
    }

    const handleFileSelection = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    useEffect(() => {
        uploadPhoto();
    }, [selectedFile]);

    return (
        <>
        {type === "profilePictures" && (
            <button onClick={handleClick} className="add-profile-pic" type="button"><svg xmlns="http://www.w3.org/2000/svg" className="add-profile-pic-icon" height="48" viewBox="0 96 960 960" width="48"><path d="M480 790q72 0 121-49t49-121q0-73-49-121.5T480 450q-73 0-121.5 48.5T310 620q0 72 48.5 121T480 790ZM142.152 941.978q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865V365.152q0-26.697 20.265-47.533 20.266-20.837 47.865-20.837h143.413l75.631-89.63h237.847l75.392 89.63h143.413q26.697 0 47.533 20.837 20.837 20.836 20.837 47.533v508.696q0 27.599-20.837 47.865-20.836 20.265-47.533 20.265H142.152Z"/></svg></button>
        )}
        {type === "coverPhotos" && (
            <button onClick={handleClick}className="cover-photo-edit" type="button">Edit cover photo</button>
        )}
            <input hidden type="file" ref={fileInputRef} onChange={handleFileSelection}></input>
        </>
    )
};

export default AddMedia;