import React from "react";
import NavBar from "./navbar.jsx";
import CarouseL from "./carousel.jsx";
import Cards from "./card.jsx";
import Footer from "./footer.jsx";
import { CardGroup, Container } from "react-bootstrap";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			<Container>
				<CarouseL></CarouseL>
				<CardGroup>
					<Cards
						thumbnail={
							"https://media.istockphoto.com/photos/madrid-spain-on-gran-via-picture-id514769480?s=170667a"
						}
						title="Edificio Metrópolis"
						date={new Date().toDateString()}
						cardcontent="El Edificio Metrópolis es un edificio de la ciudad española de Madrid, de estilo ecléctico de inspiración francesa, ubicado en la esquina de la calle de Alcalá con la calle Gran Vía (Distrito Centro)."
					/>
					<Cards
						thumbnail={
							"https://theculturetrip.com/wp-content/uploads/2017/02/cibeles-palace-one-of-the-symbols-of-the-city-of-madrid.jpg"
						}
						title="Palacio Cibeles"
						date={new Date(2021, 11, 21).toDateString()}
						cardcontent="El Palacio de Cibeles (denominado antes Palacio de Telecomunicaciones o Palacio de Comunicaciones) es un conjunto integrado por dos edificios de fachada blanca ubicados en uno de los centros del Madrid histórico, España."
					/>
					<Cards
						thumbnail={
							"https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2012/06/15/60453.jpg"
						}
						title="Puerta del Sol"
						date={new Date(2021, 9, 4).toDateString()}
						cardcontent="La Puerta del Sol es una plaza de la ciudad española de Madrid. En ella se encuentra desde 1950 el denominado Kilómetro Cero de las carreteras radiales del país."
					/>
				</CardGroup>
			</Container>
			<Footer></Footer>
		</div>
	);
};

export default Home;
