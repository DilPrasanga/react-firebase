import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqzKN28EjlApyt86aK0xXnQIMtRarN_fg",
    authDomain: "usermanagement-e7e92.firebaseapp.com",
    databaseURL: "https://usermanagement-e7e92.firebaseio.com",
    projectId: "usermanagement-e7e92",
    storageBucket: "usermanagement-e7e92.appspot.com",
    messagingSenderId: "472134807671",
    appId: "1:472134807671:web:44d80528a429a23c4fd672",
    measurementId: "G-GQM82XFB8Y"
  };
  
class Firebase {

    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}
 
export default Firebase;