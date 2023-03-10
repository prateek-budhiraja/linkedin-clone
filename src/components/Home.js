import React, { useContext, useEffect } from "react";
import HomeLeft from "./HomeLeft";
import HomeHero from "./HomeHero";
import HomeRight from "./HomeRight";
import { useNavigate } from "react-router-dom";
import authContext from "../services/auth";
import Header from "./Header";

export default function Home() {
	const { user, setUser } = useContext(authContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (user == null) {
			navigate("/");
		}
	}, []);

	return (
		<>
			<Header setUser={setUser} userPhoto={user?.reloadUserInfo.photoUrl} />
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
				<div className="lg:grid px-4 flex flex-col gap-4 grid-cols-4 my-4 lg:my-[40px]">
					<div className="col-span-1">
						<HomeLeft userName={user?.reloadUserInfo.displayName} />
					</div>
					<div className="col-span-2">
						<HomeHero userPhoto={user?.reloadUserInfo.photoUrl} />
					</div>
					<div className="col-span-1">
						<HomeRight />
					</div>
				</div>
			</div>
		</>
	);
}
