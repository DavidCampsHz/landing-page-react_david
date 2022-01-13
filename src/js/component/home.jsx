import React from "react";
import NavBar from "./navbar.jsx";
import CarouseL from "./carousel.jsx";
import Cards from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			<div className="container">
				<CarouseL></CarouseL>
				<Cards></Cards>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
