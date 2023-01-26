import React from "react";

export default function HomeRight() {
	return (
		<>
			<div className="px-3 py-2 border-2 rounded-xl border-gray-500 bg-white">
				<div className="flex justify-between mt-1 mb-3">
					<h1 className="font-semibold text-lg">Add to your feed</h1>
					<img src="/images/feed-icon.svg" alt="" />
				</div>
				<div className="flex items-center gap-4">
					<div className="bg-gray-100 px-2 rounded-full text-2xl border-4 border-gray-500 border-solid">
						#
					</div>
					<div>
						<h3>#Linkedin</h3>
						<a
							href="#"
							className="border-[1px] border-solid border-black px-4 py-[2px] rounded-full inline-block"
						>
							Follow
						</a>
					</div>
				</div>
				<div className="flex items-center gap-4 mt-3">
					<div className="bg-gray-100 px-2 rounded-full text-2xl border-4 border-gray-500 border-solid">
						#
					</div>
					<div>
						<h3># Video</h3>
						<a
							href="#"
							className="border-[1px] border-solid border-black px-4 py-[2px] rounded-full inline-block"
						>
							Follow
						</a>
					</div>
				</div>
				<div className="flex gap-2 items-center mt-3">
					<a href="#" className="text-primaryBlue font-bold">
						View all recommendations
					</a>
					<img src="/images/right-icon.svg" alt="" />
				</div>
			</div>
			<div className="px-3 py-2 border-2 rounded-xl border-gray-500 bg-white min-h-[30px] mt-3 mb-20"></div>
		</>
	);
}
