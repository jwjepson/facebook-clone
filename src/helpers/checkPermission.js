export const checkPermission = (currentUser, userViewing) => {
    if (currentUser.uid === userViewing.id || userViewing.friends.includes(currentUser.uid)) {
        return true;
    }
}