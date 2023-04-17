import React, {useEffect, useState} from "react";
import "../styles/photoslistsmall.css";
import profilePic from "../images/default-profile-pic.jpg";
import { checkPermission } from "../helpers/checkPermission";
import { useParams } from "react-router-dom";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";

const PhotosListSmall = ({user, userData, db}) => {

    const [photos, setPhotos] = useState([]);

    let {userId} = useParams();

    useEffect(() => {
        const getUserMedia = async () => {
            const docs = [];
            try {
                const q = query(collection(db, "media"), where("belongsTo", "==", userId), orderBy("timestamp", "desc"), limit(9));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    docs.push(doc.data());
                })
                setPhotos(docs);
            } catch (error) {
                console.log(error);
            }
        }
        getUserMedia();
    }, [userId, db]);

    console.log(photos);

    return (
        <div className="photos-container">
            <div className="photos-container-header">
                <h4>Photos</h4>
                <a className="see-all-button photos">See all photos</a>
            </div>
            <div className="photos-container-content">
                <div className="photos-grid">
                    {checkPermission(user, userData) && (
                        <>
                        {photos.map((photo) => (
                            <div className="thumbnail">
                                <img className="photo" src={photo.mediaURL}></img>
                            </div>
                        ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PhotosListSmall;