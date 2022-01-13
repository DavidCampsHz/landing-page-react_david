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
			<CarouseL></CarouseL>
			<Footer></Footer>
			<Cards></Cards>
		</div>
	);
};

export default Home;
