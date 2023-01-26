import React from "react";

export default function Post() {
	return (
		<div className="py-4 px-3 lg:px-8 border-2 border-solid rounded-xl border-gray-500 bg-white">
			<div className="flex gap-3 relative">
				<img className="w-[50px]" src="/images/user.svg" alt="" />
				<div>
					<p className="leading-tight font-medium">Username</p>
					<p className="leading-tight text-sm">Info</p>
					<p className="leading-tight text-sm">Date</p>
				</div>
				<img
					className="absolute top-0 right-2 w-[18px]"
					src="/images/ellipse.svg"
					alt=""
				/>
			</div>
			<div className="leading-tight my-2">
				This is a random post content, that will act as a lorem ipsum for some
				time, but the actual content will come from the database
				<img
					className="mt-1"
					src="https://images.pexels.com/photos/7775639/pexels-photo-7775639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt=""
				/>
			</div>
			<div className="flex items-center gap-1">
				<img className="w-[14px]" src="/images/like.svg" alt="" />
				<span className="text-sm">75</span>
			</div>
			<hr className="my-2" />
			<div className="flex gap-3">
				<div className="flex items-center gap-1">
					<img className="w-[20px]" src="/images/like.svg" alt="" />
					<span>Like</span>
				</div>
				<div className="flex items-center gap-1">
					<img className="w-[20px]" src="/images/comment.svg" alt="" />
					<span>Comments</span>
				</div>
				<div className="flex items-center gap-1">
					<img className="w-[20px]" src="/images/share.svg" alt="" />
					<span>Share</span>
				</div>
				<div className="flex gap-1 items-center">
					<img className="w-[20px]" src="/images/send.svg" alt="" />
					<span>Send</span>
				</div>
			</div>
		</div>
	);
}
