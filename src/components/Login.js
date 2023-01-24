import React from "react";

export default function Login() {
	return (
		<>
			<nav className="flex py-3 px-5 items-center justify-between">
				<a href="/">
					<img
						src="/images/linkedin.svg"
						alt="linkedin logo"
						className="w-[100px]"
					/>
				</a>
				<div className="flex gap-5 items-center">
					<a className="inline-block" href="/signup">
						Join Now
					</a>
					<a
						className="inline-block border-2 font-semibold text-primaryBlue border-primaryBlue border-solid px-4 py-2 rounded-full"
						href="/"
					>
						Sign in
					</a>
				</div>
			</nav>
			<main className="my-5">
				<h1 className="text-center text-primaryBlue text-2xl px-6 mb-5">
					Welcome to your professional community
				</h1>
				<img
					className="px-5"
					src="/images/login-hero.svg"
					alt="hero login image"
				/>
				<button className="my-5 mx-auto block py-2 px-5 border-solid border-2 border-black rounded-full">
					<img
						className="inline-block mr-2 w-[25px]"
						src="/images/google-g.png"
						alt="google logo"
					/>
					<span className="font-semibold text-gray-700">
						Sign in with Google
					</span>
				</button>
			</main>
		</>
	);
}
