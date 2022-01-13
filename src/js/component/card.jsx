import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Cards = () => {
	return (
		<>
			<CardGroup>
				<Card>
					<Card.Img
						variant="top"
						src="https://media.istockphoto.com/photos/madrid-spain-on-gran-via-picture-id514769480?s=170667a"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://theculturetrip.com/wp-content/uploads/2017/02/cibeles-palace-one-of-the-symbols-of-the-city-of-madrid.jpg"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural
							lead-in to additional content.{" "}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2012/06/15/60453.jpg"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</Card.Footer>
				</Card>
			</CardGroup>
		</>
	);
};

export default Cards;
