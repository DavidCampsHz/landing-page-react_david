import React from "react";
import { Carousel } from "react-bootstrap";

const CarouseL = () => {
	return (
		<>
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h5>Il tramonto</h5>
						<p>
							È praticamente impossibili guardare un tramonto é
							non sognare
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h5>Il mare</h5>
						<p>Take me to the ocean</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h5>Un'altro tramonto</h5>
						<p>
							Toma riesgos. Si ganas serás más feliz. Si pierdes
							serás más sabio.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default CarouseL;
