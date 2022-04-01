/** @format */
import { FC } from "react";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
	return (
		<nav>
			<ul style={{ flexDirection: "row" }}>
				<li>
					<Link to="/">🏠</Link>
				</li>
				{/* <li>
					<Link to="/countries">Countries</Link>
				</li> */}
			</ul>
		</nav>
	);
};

export default NavBar;
