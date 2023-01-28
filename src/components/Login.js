import React, { useContext, useEffect } from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import authContext from "../services/auth";

export default function Login() {
	const navigate = useNavigate();
	const { setUser } = useContext(authContext);
	const provider = new GoogleAuthProvider();
	function handleClick() {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setUser(user);
				navigate("/home");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("Error: ", errorMessage, " Code: ", errorCode);
			});
	}

	return (
		<div className="overflow-x-hidden">
			<nav className="flex py-3 px-5 items-center justify-between md:p-5 lg:p-8">
				<a href="/">
					<img
						src="/images/linkedin.svg"
						alt="linkedin logo"
						className="w-[100px] md:w-[150px]"
					/>
				</a>
				<div className="flex gap-3 items-center lg:gap-10">
					<a
						className="inline-block md:text-xl border-primaryBlue border-solid px-4 py-2 rounded-full hover:bg-gray-200"
						href="/signup"
					>
						Join Now
					</a>
					<a
						className="inline-block border-2 font-semibold text-primaryBlue hover:text-white hover:bg-primaryBlue border-primaryBlue border-solid px-4 py-2 rounded-full md:text-xl"
						href="/"
					>
						Sign in
					</a>
				</div>
			</nav>
			<main className="my-5 flex flex-col lg:flex-row-reverse items-center lg:px-[40px]">
				<img
					className="px-5 md:w-[60%] lg:-mr-[120px] max-w-[650px]"
					src="/images/login-hero.svg"
					alt="hero login image"
				/>
				<div className="px-6 mt-2 lg:mt-0">
					<h1 className="text-center lg:text-left text-primaryBlue text-2xl mb-5 md:text-5xl lg:text-6xl">
						Welcome to your professional community
					</h1>
					<button
						onClick={handleClick}
						className="block hover:bg-black text-gray-700 hover:text-white mx-auto items-center my-5 py-2 px-5 border-solid border-2 border-black rounded-full md:mt-[40px] lg:mt-[60px] lg:mx-0"
					>
						<img
							className="inline-block mr-2 w-[25px] md:mb-[4px] md:w-[28px] lg:w-[30px]"
							src="/images/google-g.png"
							alt="google logo"
						/>
						<span className="font-semibold md:text-xl lg:text-2xl">
							Sign in with Google
						</span>
					</button>
				</div>
			</main>
		</div>
	);
}
