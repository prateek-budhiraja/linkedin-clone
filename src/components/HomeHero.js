import React from "react";
import Post from "./Post";

export default function HomeHero({ userPhoto }) {
	return (
		<>
			<div className="py-4 lg:py-6 px-3 lg:px-8 border-2 border-solid rounded-xl border-gray-500 bg-white mb-4">
				<div className="flex gap-3 lg:gap-5 items-center">
					<img className="rounded-full w-[40px]" src={userPhoto} alt="" />
					<input
						type="text"
						className="w-[100%] border-[1px] border-black border-solid rounded-full py-1 px-3 font-semibold"
						placeholder="Start a post"
					/>
				</div>
				<div className="flex justify-between mt-4">
					<div className="flex items-center">
						<img src="/images/photo-icon.svg" alt="" />
						<span className="lg:text-base text-xs">Photo</span>
					</div>
					<div className="flex items-center">
						<img src="/images/video-icon.svg" alt="" />
						<span className="lg:text-base text-xs">Video</span>
					</div>
					<div className="flex items-center">
						<img src="/images/event-icon.svg" alt="" />
						<span className="lg:text-base text-xs">Event</span>
					</div>
					<div className="flex items-center">
						<img src="/images/write-icon.svg" alt="" />
						<span className="lg:text-base text-xs">Write articles</span>
					</div>
				</div>
			</div>
			<Post />
		</>
	);
}
