import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import authContext from "./services/auth";

function App() {
	const [user, setUser] = useState(null);
	const value = { user, setUser };
	return (
		<>
			<authContext.Provider value={value}>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<Login />} />
						<Route
							path="/home"
							element={
								<>
									<Home />
								</>
							}
						/>
					</Routes>
				</BrowserRouter>
			</authContext.Provider>
		</>
	);
}

export default App;
