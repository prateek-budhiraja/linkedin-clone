import React from "react";

export default function Login() {
	return (
		<div className="overflow-x-hidden">
			<nav className="flex py-3 px-5 items-center justify-between md:p-5 lg:p-8">
				<a href="/">
					<img
						src="/images/linkedin.svg"
						alt="linkedin logo"
						className="w-[100px] md:w-[150px] lg:w-[200px]"
					/>
				</a>
				<div className="flex gap-5 items-center lg:gap-10">
					<a className="inline-block md:text-xl lg:text-2xl" href="/signup">
						Join Now
					</a>
					<a
						className="inline-block border-2 font-semibold text-primaryBlue border-primaryBlue border-solid px-4 py-2 rounded-full md:text-xl lg:text-2xl"
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
					<button className="block mx-auto items-center my-5 py-2 px-5 border-solid border-2 border-black rounded-full md:mt-[40px] lg:mt-[60px] lg:mx-0">
						<img
							className="inline-block mr-2 w-[25px] md:mb-[4px] md:w-[28px] lg:w-[30px]"
							src="/images/google-g.png"
							alt="google logo"
						/>
						<span className="font-semibold text-gray-700 md:text-xl lg:text-2xl">
							Sign in with Google
						</span>
					</button>
				</div>
			</main>
		</div>
	);
}
