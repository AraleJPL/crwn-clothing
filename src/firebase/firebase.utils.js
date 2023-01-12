import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA9QdQS3Ka1iXmr_3ORBesyhPxfWUgKUd8",
  authDomain: "crwn-db-d9fbb.firebaseapp.com",
  projectId: "crwn-db-d9fbb",
  storageBucket: "crwn-db-d9fbb.appspot.com",
  messagingSenderId: "757498779166",
  appId: "1:757498779166:web:57f61e93dceeb183e1400f",
  measurementId: "G-S1EFZR8T7P",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
