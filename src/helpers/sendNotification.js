import {addDoc, collection, updateDoc, increment, doc} from "firebase/firestore";

export const sendNotification = async (type, sender, receiver, db) => {

    let content;

    if (type === "friendRequest") {
        content = `${sender.firstName} sent you a friend request!`;
    } else if (type === "confirmRequest") {
        content = `${sender.firstName} accepted your friend request`;
    }
   
    await addDoc(collection(db, "notifications"), {
        content: content,
        picture: sender.profilePicURL,
        read: false,
        src: sender.id,
        belongsTo: receiver,
        timestamp: new Date(),
    });

    const userRef = doc(db, "users", receiver);
    await updateDoc(userRef, {
        notificationCount: increment(1),
    });
}