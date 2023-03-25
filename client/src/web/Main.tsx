import { Route, Routes } from "react-router-dom";
import Page1 from "./page1/Page1";
import Page2 from "./page2/Page2";

function Main() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Page1 />} />
				<Route path="/page2" element={<Page2 />} />
			</Routes>
		</div>
	);
}

export default Main;
