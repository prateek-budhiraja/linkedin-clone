import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDa6niTOTwUF54kHiOmMfempfv7GE1wo8c",
	authDomain: "linkedin-clone-dce84.firebaseapp.com",
	projectId: "linkedin-clone-dce84",
	storageBucket: "linkedin-clone-dce84.appspot.com",
	messagingSenderId: "265522185185",
	appId: "1:265522185185:web:bc11b2d6787b0ce8a088a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
