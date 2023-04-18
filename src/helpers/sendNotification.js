import {addDoc, collection, updateDoc, increment, doc} from "firebase/firestore";


const notificationContentMap = {
    friendRequest: (sender) => `${sender.firstName} ${sender.lastName} sent you a friend request`,
    confirmRequest: (sender) => `${sender.firstName} ${sender.lastName} accepted your friend request`,
    like: (sender, data) => {
        if (data.content === "") {
            return `${sender.firstName} ${sender.lastName} liked your photo`;
        } else {
            return `${sender.firstName} ${sender.lastName} liked your post: "${data.content.slice(0,45)}..."`;
        }
    }
}

const notificationSrcMap = {
    friendRequest: (sender) => sender.id,
    confirmRequest: (sender) => sender.id,
    like: (sender) => sender.id,
};


class Notification {
    constructor(type, sender, receiver, db, data) {
        this.type = type;
        this.sender = sender;
        this.receiver = receiver;
        this.db = db;
        this.data = data;
    }

    get content() {
        return notificationContentMap[this.type](this.sender, this.data);
    }

    get src() {
        return notificationSrcMap[this.type](this.sender);
    }

    async send() {
        await addDoc(collection(this.db, "notifications"), {
            content: this.content,
            picture: this.sender.profilePicURL,
            read: false,
            src: this.src,
            belongsTo: this.receiver,
            timestamp: new Date(),
        });

        const userRef = doc(this.db, "users", this.receiver);
        await updateDoc(userRef, {
            notificationCount: increment(1),
        });
    }
}

export {Notification};