import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./web/auth/Login";
import Main from "./web/Main";
import Menu from "./web/Menu";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./assets/GlobalStyle";
import SideBarPage from "./model/SideBarPage";

function App() {
	return (
		<div className="App">
			
			<ThemeProvider theme={theme}>
		 	<CssBaseline />
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</Router>
			</ThemeProvider>
			
		</div>
	);
}

function Home() {
	return (
		<>
		
		 	<SideBarPage />
			{/* <Menu /> */}
			{/* <Main /> */}

		
		
		</>
	);
}

export default App;
