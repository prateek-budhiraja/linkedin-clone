import React from "react";

export default function HomeLeft({ userName }) {
	return (
		<>
			<div className="relative text-center border-2 rounded-xl border-gray-500 bg-white">
				<img className="rounded-t-xl" src="/images/card-bg.svg" alt="" />
				<div className="-mt-8 bg-white inline-block rounded-full p-2 border-2 border-solid">
					<img className="mx-auto" src="/images/photo.svg" alt="" />
				</div>
				<h2 className="font-bold text-xl">Welcome, {userName}!</h2>
				<a className="text-primaryBlue text-sm font-semibold" href="#">
					Add a photo
				</a>

				<hr className="mt-1 border-[1px] border-solid" />

				<div className="text-left px-3 py-1 flex items-center justify-between">
					<div>
						<h2 className="text-gray-600">Connections</h2>
						<h2 className="font-semibold">Grow your network</h2>
					</div>
					<img src="/images/widget-icon.svg" alt="" />
				</div>

				<hr className="my-1 border-[1px] border-solid" />

				<div className="text-left px-3 py-2 flex items-center gap-1">
					<img src="/images/item-icon.svg" alt="" />
					<h2 className="font-semibold">My Items</h2>
				</div>
			</div>
			<div className="hidden lg:block mt-5 px-3 py-2 border-2 rounded-xl border-gray-500 bg-white">
				<h2 className="font-semibold">Groups</h2>
				<div className="flex justify-between">
					<h2 className="font-semibold">Events</h2>
					<img src="/images/plus-icon.svg" alt="" />
				</div>
				<h2 className="font-semibold">Follow Hashtags</h2>
				<hr className="my-1 border-[1px] border-solid" />
				<h2 className="font-semibold text-gray-600">Discover more</h2>
			</div>
		</>
	);
}
