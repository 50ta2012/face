import { Link } from "react-router-dom";

function Menu() {
	return (
		<>
			<Link to={"/"}>page1</Link>
			<br />
			<Link to={"/page2"}>page2</Link>
			<hr />
		</>
	);
}

export default Menu;
