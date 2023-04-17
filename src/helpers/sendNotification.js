import {addDoc, collection, updateDoc, increment, doc} from "firebase/firestore";

export const sendNotification = async (type, sender, receiver, db) => {

    console.log("Notification is being called");
    
    if (type === "friendRequest") {
        await addDoc(collection(db, "notifications"), {
                content: `${sender.firstName} sent you a friend request!`,
                picture: sender.profilePicURL,
                read: false,
                src: sender.id,
                belongsTo: receiver,
                timestamp: new Date(),
        });
    }

    const userRef = doc(db, "users", receiver);
    await updateDoc(userRef, {
        notificationCount: increment(1),
    });
}