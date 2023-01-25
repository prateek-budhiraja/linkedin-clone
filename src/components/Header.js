import React from "react";

export default function Header() {
	return (
		<>
			<nav className="px-3 py-1 bg-white border-b-2 border-solid">
				<div className="grid grid-cols-5 items-center">
					<a className="col-span-1 justify-self-start" href="/home">
						<img
							className="min-w-[40px] inline"
							src="/images/home-logo.svg"
							alt="linked in logo"
						/>
					</a>
					<span className="relative col-span-3">
						<img
							className="absolute top-3 left-3 w-[20px]"
							src="/images/search-icon.svg"
							alt="search icon"
						/>
						<input
							className="w-[100%] py-2 px-11 rounded-lg border-solid border-2 focus:border-primaryBlue"
							type="text"
							name="search"
							placeholder="Search"
						/>
					</span>
					<a className="justify-self-end col-span-1" href="/home">
						<img
							className="min-w-[40px] inline rounded-full"
							src="/images/user.svg"
							alt="user logo"
						/>
						<div className="text-sm mt-1 mx-auto">
							<span>Me</span>
							<img
								className="inline ml-[2px]"
								src="/images/down-icon.svg"
								alt=""
							/>
						</div>
					</a>
				</div>
				<div className="border-t-2 border-solid bg-white border-gray-200 absolute flex w-[100%] justify-evenly bottom-0 left-0 px-1 py-2">
					<a href="/home">
						<img className="mx-auto" src="/images/nav-home.svg" alt="home" />
						<span className="text-sm">Home</span>
					</a>
					<a href="/home">
						<img className="mx-auto" src="/images/nav-network.svg" alt="home" />
						<span className="text-sm">My Network</span>
					</a>
					<a href="/home">
						<img className="mx-auto" src="/images/nav-jobs.svg" alt="home" />
						<span className="text-sm">Jobs</span>
					</a>
					<a href="/home">
						<img
							className="mx-auto"
							src="/images/nav-messaging.svg"
							alt="home"
						/>
						<span className="text-sm">Messaging</span>
					</a>
					<a href="/home">
						<img
							className="mx-auto"
							src="/images/nav-notifications.svg"
							alt="home"
						/>
						<span className="text-sm">Notification</span>
					</a>
				</div>
			</nav>
		</>
	);
}
