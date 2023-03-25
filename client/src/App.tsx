import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./web/auth/Login";
import Main from "./web/Main";
import Menu from "./web/Menu";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

function Home() {
	return (
		<>
			<Menu />
			<Main />
		</>
	);
}

export default App;
