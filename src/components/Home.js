import React from "react";
import HomeLeft from "./HomeLeft";
import HomeHero from "./HomeHero";
import HomeRight from "./HomeRight";

export default function Home() {
	return (
		<div className="mt-4">
			<h1 className="text-center text-base lg:text-2xl font-semibold px-3">
				<a href="/login" className="text-primaryBlue underline">
					Hiring in a hurry?
				</a>
				<span>
					{" "}
					Find talented pros in record time with Linkedin and keep business
					moving!
				</span>
			</h1>
			<div className="lg:grid px-4 flex flex-col gap-4 grid-cols-4 mt-4 lg:mt-[80px]">
				<div className="col-span-1">
					<HomeLeft />
				</div>
				<div className="col-span-2">
					<HomeHero />
				</div>
				<div className="col-span-1">
					<HomeRight />
				</div>
			</div>
		</div>
	);
}
