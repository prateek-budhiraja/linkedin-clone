import React from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";

export default function Login() {
	const provider = new GoogleAuthProvider();
	const handleClick = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				console.log(token);
				// The signed-in user info.
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// const email = error.customData.email;
				// const credential = GoogleAuthProvider.credentialFromError(error);
				console.log("Error: ", errorMessage, " Code: ", errorCode);
			});
	};
	return <button onClick={handleClick}>Login</button>;
}
