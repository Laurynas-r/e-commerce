import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyC2PBSQyKnROQgldrJ4unTg8_K_VwqwFMw",
    authDomain: "clothing-e-commerce-e6109.firebaseapp.com",
    databaseURL: "https://clothing-e-commerce-e6109.firebaseio.com",
    projectId: "clothing-e-commerce-e6109",
    storageBucket: "clothing-e-commerce-e6109.appspot.com",
    messagingSenderId: "375631606765",
    appId: "1:375631606765:web:a72a9e73d7228fb3ec2de4",
    measurementId: "G-E0GJC7RNP4"
  };

  //getting user infromation and storing it to database

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }

    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Google authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;